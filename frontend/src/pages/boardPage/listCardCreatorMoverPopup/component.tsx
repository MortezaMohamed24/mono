import bd from "/features/boards";
import lt from "/features/lists";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import BLCC from "/features/boardListCardCreator";
import React from "react";
import popupify from "/components/popupify";
import Selector from "/components/selector/stateless";

import {ID} from "./constants";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useEffect} from "react";
import {ListOption} from "./selectorOptions";
import {IndexOption} from "./selectorOptions";
import {useDispatch} from "/store";
import {useSelector} from "/store";
import {useSelectorState} from "/components/selector/stateless";


const BoardListCardCreatorMoverPopup = popupify(ID, () => {
  const state = useSelector(BLCC.slice);
 
  const list = useSelector(lt.one(state.isOpen ? {id: state.idList} : {}));
  const board = useSelector(bd.opened);
  const allLists = useSelector(lt.many({id: board ? board.idLists : []}));

  const listSelector = useSelectorState<ListOption>();
  const indexSelector = useSelectorState<IndexOption>();
  
  const selectedListOption = listSelector.selected;
  const selectedIndexOption = indexSelector.selected;

  const selectedList = useSelector(selectedListOption ? lt.one({id: selectedListOption.id}) : () => undefined);

  const dispatch = useDispatch();
  

  /**
   * It is an error if this popup is opened while: 
   *   - there is no open board.
   *   - the <CardCreator /> component is not open
   *   - the list in which the <CardCreator /> is displayed not found.
  */
  if (!list || !board || !state.isOpen) {
    return (
      <>
        <Header title="Labels" />
        
        <section className={ps.body}>
          <p>Unexpected error occoured.</p>
          <p>Try reloading the page.</p>
        </section>      

        <footer className={ps.footer}>
          <Toggler 
            action="close"
            children="Close"
            className={`${btn.gray} ${btn.block}`}
          />
        </footer>
      </>
    );
  }


  const {index, idList} = state;


  const commit = () => {
    if (selectedListOption && selectedIndexOption) {
      dispatch(BLCC.move({
        index: selectedIndexOption.value,
        idList: selectedListOption.id,
      }));
    }
  };

  const allIndexes = () => {
    if (selectedList) {
      if (selectedList.id === list.id) {
        return selectedList.idCards.slice();
      } else {
        const indexes: (string | symbol)[] = [...selectedList.idCards];

        indexes.splice(index, 0, Symbol());

        return indexes;
      }
    }

    return [];
  };

  const setListsOptions = () => {
    listSelector.set(allLists.map(({title, id}) => ({
      id: id,
      name: `${title}${id === idList ? " (current)" : ""}`,
      label: title,
    })));
  };

  const setIndexesOptions = () => {
    if (indexSelector.selected) {
      indexSelector.set(allIndexes().map((idCard, index) => ({
        id: String(index),
        name: `${index + 1}${typeof idCard === "symbol" ? " (current)" : ""}`,
        label: String(index + 1),
        value: index,
      })));
    } 
  };

  const selectDefaultList = () => {
    if (list) {
      listSelector.select({id: list.id});
    }
  };

  const selectDefaultIndex = () => {
    if (selectedListOption) {
      if (selectedListOption.id === idList) {
        indexSelector.select({index});
      } else {
        indexSelector.select({index: 0});
      }
    }
  };


  useEffect(() => {
    setListsOptions();
    selectDefaultList();
  }, []);
  
  useEffect(() => {
    setIndexesOptions();
    selectDefaultIndex();
  }, [listSelector.selected?.id]);


  return (
    <>
      <Header title="Select position" />

      <section className={ps.body}>
        <Selector caption="List" state={listSelector} />
        <Selector caption="Index" state={indexSelector} />
      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          disabled={!(list && selectedList && indexSelector.selected && listSelector.selected)}
          children="Select"
          className={btn.blue}
        />
      </footer>
    </>
  );
});


export default BoardListCardCreatorMoverPopup;