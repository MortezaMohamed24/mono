import s from "./style";
import bd from "/boards";
import lt from "/lists";
import cd from "/cards";
import type from "/style/typeography/style";
import React from "react";
import {Props} from "./types";
import Selector from "/components/selector";
import {useEffect} from "react";
import {ListOption} from "./types";
import {IndexOption} from "./types";
import {BoardOption} from "./types";
import {useSelector} from "react-redux";
import {useSelectorState} from "/components/selector";


/**
 * allows the user to decide the location into which to copy the source card, 
 * that is, to answer these questions:
 * 
 * - into which board
 * - into which list in that board
 * - at which index in that list
 * 
 * @param idCard the source card's id
*/
const CopyLocater = React.memo<Props>(({meta, idCard}) => {
  /** the source card */
  const card = useSelector(cd.one({id: idCard}));
  /** the source card's parent list */
  const currentList = useSelector(lt.one({idCards: idCard}));
  /** `currentList`'s parent board */
  const currentBoard = useSelector(currentList ? bd.one({id: currentList.idBoard}) : () => undefined);

  const indexSelector = useSelectorState<IndexOption>();
  const listSelector = useSelectorState<ListOption>();
  const boardSelector = useSelectorState<BoardOption>();

  const selectedIndexOption = indexSelector.selected;
  const selectedListOption = listSelector.selected;
  const selectedBoardOption = boardSelector.selected;

  const selectedList = useSelector(selectedListOption ? lt.one({id: selectedListOption.id}) : () => undefined);
  const selectedBoard = useSelector(selectedBoardOption ? bd.one({id: selectedBoardOption.id}) : () => undefined);

  /** all lists that are in `selectedBoard` */
  const lists = useSelector(selectedBoard ? lt.many({id: selectedBoard.idLists}) : () => []);
  /** all boards of the user */
  const boards = Object.values(useSelector(bd.entities));

  
  /** it is an error if any of these is not defined */
  if (!(card && currentList && currentBoard)) {
    return (
      <section className={s.body}>
        <h3 className={type.h6}>
          Select Destination
        </h3>

        <p>
          Could not display the copying destination select because of an unexpected error.
          <br />
          You may try reloading the page.
        </p>
      </section>
    );
  }


  /** 
   * returns an array whose keys are the indexes of `selectedList` 
   * and whose values are the ids of the cards at those indexes, respectivly.
  */
  const indexes = () => {
    if (selectedList) {
      // `selectedList` is the list that will own the created copy if the user
      // commits the copying operation. 
      //
      // if, for example, `selectedList` has two cards, and if we are to add a new card,
      // then, there would be three indexes to place the the new card at: 0 (first), 1 (second),
      // and 3 (third).
      //
      // that is why this array is one-element longer than the number of the cards that are
      // already in `selectedList`: to make one extra index for the new card. i used a symbol
      // instead of the new card's id because the new card is not yet in `selectedList`, and,
      // even before that, is not yet created. 
      return [...selectedList.idCards, Symbol()];
    } else {
      // indexes are possible places in `selectedList`, if there is no selected list,
      // there are no indexes. 
      // 
      // by default, this component should pre select `currentBoard` as
      // the target board and `currentList` as the target list, and `card`'s 
      // index in `currentList` as the target index, so the user should not 
      // see indexSelector empty. 
      return [];
    }
  };

  const setBoardOptions = () => {
    boardSelector.set(
      boards.map(
        ({id, title}) => ({
          id: id,
          name: `${title}${id === currentBoard.id ? " (current)" : ""}`,
          label: title,
        })
      )
    );
  };

  const setListOptions = () => {
    listSelector.set(
      lists.map(
        ({id, title}) => ({
          id: id,
          name: `${title}${id === card.idList ? " (current)" : ""}`,
          label: title,
        })
      )
    )
  };

  const setIndexOptions = () => {
    indexSelector.set(
      indexes().map(
        (anyIdCard, index) => ({
          id: anyIdCard,
          name: `${String(index + 1)}${anyIdCard === card.id ? " (current)" : ""}`,
          label: String(index + 1),
          value: index,
        })
      )
    );
  };

  const selectDefaultBoard = () => {
    boardSelector.select({id: currentBoard.id});
  };

  const selectDefaultList = () => {
    if (selectedBoard) {
      if (selectedBoard.id === currentBoard.id) {
        listSelector.select({id: currentList.id});
      } else {
        listSelector.select({index: 0});
      }
    }
  };

  const selectDefaultIndex = () => {
    if (selectedList) {
      if (selectedList.id === currentList.id) {
        indexSelector.select({id: card.id});
      } else {
        indexSelector.select({index: 0});
      }
    }
  };


  useEffect(() => {
    setBoardOptions();
    selectDefaultBoard();
  }, []);

  useEffect(() => {
    setListOptions();
    selectDefaultList();
  }, [selectedBoardOption]);

  useEffect(() => {
    setIndexOptions();
    selectDefaultIndex();
  }, [selectedListOption]);

  useEffect(() => {
    if (
      selectedIndexOption && 
      selectedListOption && 
      selectedBoardOption
    ) {
      meta.$ = {
        index: selectedIndexOption.value,
        idList: selectedListOption.id,
        idBoard: selectedBoardOption.id,
      };
    } else {
      meta.$ = null;
    }
  }, [selectedIndexOption, selectedListOption, selectedBoardOption]);


  return (
    <section className={s.body}>

      <h3 className={type.h6}>
        Select Destination
      </h3>

      <Selector 
        label="Board" 
        state={boardSelector} 
      />

      <Selector 
        label="List" 
        state={listSelector} 
      />

      <Selector 
        label="Index" 
        state={indexSelector} 
      />

    </section>
  );
});


export default CopyLocater;