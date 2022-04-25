import bd from "/features/boards";
import lt from "/features/lists";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import BLCC from "../listCardCreator/state";
import React, { useMemo, useState } from "react";
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
  const {isOpen, index, idList} = useSelector(BLCC.slice);
  
  const list = useSelector(isOpen ? lt.one({id: idList}) : () => undefined);
  const idLists = useSelector(bd.opened.idLists);
  const dispatch = useDispatch();

  const [selectedList, setSelectedList] = useState<any>({});
  const [selectedIndex, setSelectedIndex] = useState<any>({});


  /**
   * It is an error if this popup is opened while: 
   *   - there is no open board.
   *   - the <CardCreator /> component is not open
   *   - the list in which the <CardCreator /> is displayed not found.
  */
  if (!list || !idLists || !isOpen) {
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


  function commit() {
    if (selectedList && selectedIndex) {
      dispatch(BLCC.move({
        index: selectedIndex.value,
        idList: selectedList.id,
      }));
    }
  }


  return (
    <>
      <Header title="Select position" />

      <section className={ps.body}>
        <ListSelector 
          idList={idList}
          idLists={idLists}
          onSelect={setSelectedList}
        />
        <Selector
          list={list}
          onSelect={setSelectedIndex}
          targetIndex={index}
          selectedList={selectedList}
        />
      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          disabled={!selectedList || !selectedIndex}
          children="Select"
          className={btn.blue}
        />
      </footer>
    </>
  );
});


const Selector = "" as any;

const ListSelector = ({idList, idLists, onSelect}: any) => {
  const lists = useSelector(lt.many(idLists));
  const [meta] = useState<any>({});


  const options = lists.map(({id, title}) => ({
    id: id,
    name: `${title}${id === idList ? " (current)" : ""}`,
    label: title,
  }));


  useEffect(() => {
    meta.$?.select({id: idList});
  }, [idList]);


  return (
    <Selector
      meta={meta}
      caption="List"
      options={options}
      onSelect={onSelect} 
    />
  )
};

const IndexSelector = ({list, onSelect, targetIndex, selectedList}: any) => {
  const [meta] = useState<any>({});


  const indexes: (string | symbol)[] = [];

  if (selectedList) {
    if (selectedList.id === list.id) {
      indexes.push(...selectedList.idCards);
    } else {
      indexes.push(...selectedList.idCards);
      indexes.splice(targetIndex, 0, Symbol());
    }
  }


  const options = indexes.map((idCard, index) => ({
    id: String(index),
    name: `${index + 1}${typeof idCard === "symbol" ? " (current)" : ""}`,
    label: String(index + 1),
    value: index,
  }));


  useEffect(() => {
    if (idListSelected) {
      if (idListSelected === idList) {
        meta.select({index: targetIndex});
      } else {
        meta.select({index: 0});
      }
    }
  }, [])


  return (
    <Selector 
      caption="Index"
      options={options}
      onSelect={onSelect}
    />
  );
};


export default BoardListCardCreatorMoverPopup;