import s from "./style";
import bd from "/features/boards";
import lt from "/features/lists";
import cd from "/features/cards";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import {ID} from "../constants";
import React from "react";
import Selector from "/components/selector";
import popupify from "/components/popupify";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import typeography from "/style/typeography/style";
import {useEffect} from "react";
import {ListOption} from "./types";
import {IndexOption} from "./types";
import {BoardOption} from "./types";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useSelectorState} from "/components/selector";


/**
 * # What does it do?
 * 
 * It is a popup which allows the user a move a card from its current location to another one.
 * Only after the user commits the movement (by clicking the "Move" button) will the card 
 * be considered moved.
 * 
 * ## Terminology 
 * 
 * `card` is the card to move.
 * 
 * `currentList` is the current parent list for `card`.
 * 
 * `currentBoard` is the parent board for `currentlist`.
 * 
 * The `card`'s `current location` is "at which index in which list in which board?" it currently is.
 * 
 * The `card`'s `target location` is possibly another index in possibly another list in possibly another board.
*/
const CardMoverPopup = popupify(ID, ({payload: {idCard}}) => {
  const card  = useSelector(cd.one({id: idCard}));
  const dispatch = useDispatch();
  
  const indexSelector = useSelectorState<IndexOption>();
  const listSelector = useSelectorState<ListOption>();
  const boardSelector = useSelectorState<BoardOption>();

  const selectedIndexOption = indexSelector.selected;
  const selectedListOption = listSelector.selected;
  const selectedBoardOption = boardSelector.selected;
  
  const currentList = useSelector(lt.one({idCards: idCard}));
  const currentBoard = useSelector(currentList ? bd.one({id: currentList.idBoard}) : () => undefined);

  const selectedList  = useSelector(selectedListOption ? lt.one({id: selectedListOption.id}) : () => undefined);
  const selectedBoard = useSelector(selectedBoardOption ? bd.one({id: selectedBoardOption.id}) : () => undefined);

  /** all lists that are in `selectedBoard` */
  const lists = useSelector(selectedBoard ? lt.many({id: selectedBoard.idLists}) : () => []);
  /** all boards the signed in user */
  const boards = Object.values(useSelector(bd.entities));


  /** it's an error if any of these is not defined */
  if (!(card && currentList && currentBoard)) {
    return (
      <>
        <Header title="Move card" />

        <section className={`${ps.body} ${s.body}`}>
          <p>
            Unexpected error occured. 
            <br />  
            Try reloading the page
          </p>
        </section>
  
          <footer className={ps.footer}>
            <Toggler
              action="close"
              children="Close"
              className={btn.blue}
            />
          </footer>
      </>
    );
  }

  
  /** 
   * commites moving `card` to the selected location  
  */
  const commit = () => {
    if (selectedBoardOption && selectedListOption && selectedIndexOption) {
      dispatch(cd.move({
        index: selectedIndexOption.value,
        idCard: idCard,
        idList: selectedListOption.id,
      }));
    }
  };

  /** 
   * returns an array whose keys are the indexes of `selectedList` 
   * and whose values are the ids of the cards at those indexes, respectivly.
  */
  const indexes = () => {
    // `selectedList` is the list in/into which `card` is to be moved if the user commits the movement operation. 
    if (selectedList && currentList) {
      // if `card` is in `selectedList`
      if (selectedList.id === currentList.id) {
        // then `card` is to be moved elseindex in `currentList`
        //
        // `card` may be moved to the very same index it is current at, in which case,
        // nothing changes: it'll be as if nothing happened.
        //
        // if, for example, `currentList` has three cards, which means one of them is `card`,
        // then there are only three possiblye indexes `card` may be moved to: 0, 1, and 2, 
        // meaning as many as the number of cards in `currentList`
        return currentList.idCards.slice();
      } else {
        // else, `card` is to be moved from `currentList` into `selectedList`, meaning
        // the number of cards in `selectedList` will increase by one.
        //
        // if, for example, `selectedList` has two cards, then, after moving `card` into it,
        // it will have three cards, meaning, there will be three indexes that `card` may be at
        // one of. 
        //
        // that is why the returned array in this case is one-element longer than the 
        // number of the cards in `selectedList`: to make one extra index for the `card`. 
        //
        // i used a symbol instead of `card`'s id because the `card` is not yet moved
        // into `selectedList`.
        //
        // that is important because `setIndexOptions` comporse the values of this array 
        // with `card`'s id to know if any of them represents its current index in `currentList`
        return [...selectedList.idCards, Symbol()];
      }
    }

    return [];
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
  }, [boardSelector.selected?.id]);

  useEffect(() => {
    setIndexOptions();
    selectDefaultIndex();
  }, [listSelector.selected?.id]);


  return (
    <>
      <Header title="Move card" />
      <section className={`${ps.body} ${s.body}`}>
          <h3 className={typeography.para}>Select destination</h3>

          <Selector label="Board" state={boardSelector} />
          <Selector label="List" state={listSelector} />
          <Selector label="Index" state={indexSelector} />
        </section>

        <footer className={ps.footer}>
          <Toggler
            action="close"
            onClick={commit}
            children="Move"
            disabled={!(selectedBoardOption && selectedListOption && selectedIndexOption)}
            className={btn.blue}
          />
        </footer>
    </>
  );
});


export default CardMoverPopup;