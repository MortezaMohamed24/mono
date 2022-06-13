import LT from "/features/lists";
import PS from "/components/popupify/style";
import BLCC from "../listCardCreator/state";
import React from "react";
import popupify from "/components/popupify";

import {ID} from "./constants";
import {close} from "/components/popupify";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {DELETER_POPUP_ID} from "/components/deleterPopup";
import {BOARD_LIST_MOVER_POPUP_ID} from "../listMoverPopup";
import {BOARD_LIST_COPIER_POPUP_ID} from "../listCopierPopup";
import {BOARD_LIST_SORTER_POPUP_ID} from "../listSorterPopup";
import {BOARD_LIST_ALL_OWN_CARDS_MOVER_POPUP_ID} from "../listAllOwnCardsMoverPopup";


const BoardListOptionsPopup = popupify(ID, ({reference, payload: {idList}}) => {
  const list = useSelector(LT.one({id: idList}));  
  const dispatch = useDispatch();


  /**
   * it is an error if the target list is not found
   */
  if (!list) {
    return (
      <>
        <Header title="List options" />

        <section className={PS.body}>
          <p>Unexpected error occoured.</p>
          <p>Try reloading the page.</p>
        </section>
      </>
    );
  }


  const toggleWatch = () => {
    dispatch(LT.edit({
      idList: idList, 
      isWatched: !list.isWatched,
    }));
  };

  const destroyList = () => {
    dispatch(close({id: ID}));
    dispatch(LT.destroy({idList}));
  };

  const openCardCreator = () => {
    dispatch(BLCC.open({
      index: 0,
      idList: idList, 
    }));
  };

  const destroyAllOwnCards = () => {
    dispatch(LT.destroyAllOwnCards({idList}));
  };

  
  return (
    <>
      <Header title={list.title || "List options"} />

      <section className={PS.body}>
        <ul className={PS.list}>

          <li className={PS.li}>
            <Toggler
              action="close"
              onClick={openCardCreator}
              children="Add card..." 
              className={PS.btn} 
            />
          </li>

          <li className={PS.li}>
            <Toggler 
              target={BOARD_LIST_COPIER_POPUP_ID}
              action="forward"
              payload={{idList}}
              children="Copy list.." 
              reference={reference}
              className={PS.btn}
            />
          </li>

          <li className={PS.li}>
            <Toggler 
              target={BOARD_LIST_MOVER_POPUP_ID}
              action="forward"
              payload={{idList}}
              children="Move List.." 
              reference={reference}
              className={PS.btn}
            />
          </li>

          <li className={PS.li}>
            <Toggler
              action="close"
              onClick={toggleWatch}
              children={list.isWatched ? "Unwatch" : "Watch"}
              className={PS.btn} 
            />
          </li>

          <li className={PS.divider} tabIndex={-1} />

          <li className={PS.li}>
            <Toggler 
              action="forward"
              target={BOARD_LIST_SORTER_POPUP_ID}
              children="Sort by.." 
              payload={{idList}}
              reference={reference}
              className={PS.btn}
            />
          </li>

          <li className={PS.divider} tabIndex={-1} />

          <li className={PS.li}>
            <Toggler
              target={BOARD_LIST_ALL_OWN_CARDS_MOVER_POPUP_ID}
              action="forward"
              payload={{idSourceList: idList}}
              children="Move all cards in this list.."
              reference={reference}
              className={PS.btn}
            />
          </li>

          <li className={PS.li}>
            <Toggler
              action="forward"
              target={DELETER_POPUP_ID}
              children="Delete all cards in this list..."
              className={PS.btn}
              payload={{
                title: "Delete all cards?",
                body: `Are you sure you want to delete all cards in list: ${list.title || "Unknown list"}`,
                commit: destroyAllOwnCards,
              }}
              reference={reference}
            />
          </li>

          <li className={PS.divider} tabIndex={-1} />

          <li className={PS.li}>
            <Toggler
              action="forward"
              target={DELETER_POPUP_ID}
              children="Delete this list..."
              className={PS.btn}
              payload={{
                body: `Are you sure you want to delete list: ${list.title || "Unknown list"}`,
                title: "Delete list?",
                commit: destroyList,
              }}
              reference={reference}
            />
          </li>

        </ul>
      </section>
    </>
  );
});


export default BoardListOptionsPopup;