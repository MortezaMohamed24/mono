import s from "./style";
import BD from "/features/boards";
import lt from "/features/lists";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import {ID} from "./constants";
import React from "react";
import Selector from "/components/selector";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useEffect} from "react";
import {BoardOption} from "./selectorOptions";
import {IndexOption} from "./selectorOptions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useSelectorState} from "/components/selector";


const BoardListMoverPopup = popupify(ID, ({payload: {idList}}) => {
  const toBeMovedList = useSelector(lt.one(idList));
  const currentBoard = useSelector(BD.opened);

  const boards = Object.values(useSelector(BD.entities));
  const dispatch = useDispatch();

  const boardSelector = useSelectorState<BoardOption>();
  const indexSelector = useSelectorState<IndexOption>();

  const selectedBoardOpt = boardSelector.selected;
  const selectedIndexOpt = indexSelector.selected;

  const selectedBoard = useSelector(selectedBoardOpt ? BD.one(selectedBoardOpt.id) : () => undefined);


  /**
   * it is an error if the toMoveList is not found
   */
  if (!currentBoard || !toBeMovedList) {
    return (
      <>
        <Header title="Move list" />
  
        <section className={`${ps.body} ${s.body}`}>
          <p>Unexpected error occured</p>
          <p>Try reloading the page.</p>
        </section>
  
        <footer className={ps.footer}>
          <Toggler action="close" className={btn.blue}>Close</Toggler>
        </footer>
      </>
    );    
  }


  const commit = () => {
    if (selectedBoardOpt && selectedIndexOpt) {
      dispatch(lt.move({
        index: selectedIndexOpt.value,
        idList: idList,
        idBoard: selectedBoardOpt.id,
      }));
    }
  };

  const indexes = () => {
    if (selectedBoard) {
      if (selectedBoard.id === currentBoard.id) {
        return currentBoard.idLists.slice();
      } else {
        return [...selectedBoard.idLabels, Symbol()];
      }
    }

    return [];
  };

  const setBoardsOptions = () => {
    boardSelector.set(boards.map(anyBoard => ({
      id: anyBoard.id,
      name: `${anyBoard.title}${anyBoard.id === currentBoard?.id ? " (current)" : ""}`,
      label: anyBoard.title,
    })));
  };

  const setIndexesOptions = () => {
    indexSelector.set(indexes().map((anyIdList, index) => ({
      id: anyIdList,
      name: `${index + 1}${anyIdList === idList ? " (current)" : ""}`,
      value: index,
      label: String(index + 1),
    })));
  };

  const selectDefaultBoard = () => {
    boardSelector.select({id: currentBoard.id});
  };

  const selectDefaultIndex = () => {
    /** if the selected board is the current board */
    if (selectedBoardOpt && selectedBoardOpt.id === currentBoard.id) {
      /** then the default index is the one where the list currently is */
      indexSelector.select({id: idList});
    } else {
      /** else, it's is the first index */
      indexSelector.select({index: 0});
    }
  };


  useEffect(() => {
    setBoardsOptions();
    selectDefaultBoard();
  }, []);

  useEffect(() => {
    setIndexesOptions();
    selectDefaultIndex();
  }, [boardSelector.selected?.id]);


  return (
    <>
      <Header title="Move list" />

      <section className={`${ps.body} ${s.body}`}>
        <Selector state={boardSelector} />
        <Selector state={indexSelector} />
      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          disabled={!boardSelector.selected || !indexSelector.selected}
          children="Move"
          className={btn.blue}
        />
      </footer>
    </>
  );
});

export default BoardListMoverPopup;