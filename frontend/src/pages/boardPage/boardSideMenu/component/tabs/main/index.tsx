import s from "./style";
import bd from "/boards";
import React from "react";
import tabify from "../../tabify";
import {TABS} from "../../manager";
import {open} from "../../manager";
import ellipsify from "/util/string/ellipsify";
import {Toggler} from "/components/popupify";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {LABELS_TAB_ID} from "../labels";
import {DELETER_POPUP_ID} from "/popups/deleter";
import {BACKGROUNDS_TAB_ID} from "../backgrounds";


const ID = Symbol("board-right-hand-menu-main-tab");
const TITLE = "Menu";


const MainTab = tabify({id: ID, title: TITLE, Component: () => {
  const board = useSelector(bd.opened);
  const dispatch = useDispatch();


  function destroy() {
    if (board) {
      dispatch(bd.destroy({idBoard: board.id}));
    }
  }


  return (
    board ? (

      <ul className={s.main}>
        <li><button 
          type="button"
          onClick={() => open({id: BACKGROUNDS_TAB_ID})}
          children="Change background"
        /></li>
    
        <li><button 
          type="button"
          // TODO: Implement tab
          // onClick={() => open()}
          children="Search cards"
        /></li>
    
        <li><button 
          type="button"
          onClick={() => open({id: LABELS_TAB_ID})}
          children="Manage labels"
        /></li>
    
        <li><Toggler 
          target={DELETER_POPUP_ID}
          payload={{
            title: `Delete: ${board.title ? ellipsify(board.title, 10) : "Untitled"}`,
            body: `Are you sure you want to delete board: ${board.title || "Untitled"}`,
            commit: destroy,
          }}
          children="Delete this board"
        /></li>
      </ul>

    ) : (

      <p>
        An unexpected error occured.
        <br />
        Try reloading the page.
      </p>

    )
  );
}});


TABS.defaultize({id: ID, Component: MainTab});


export {
  ID as ID,
  ID as MAN_TAB_ID,
  MainTab as default,
  MainTab as MainTab,
};