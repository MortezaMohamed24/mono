import s from "./style";
import bd from "/features/boards";
import React from "react";
import tabify from "../../tabify";
import {TABS} from "../../manager";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import * as COLORS from "/features/boards/colors";


const ID = Symbol("board-right-hand-side-menu-backgrounds-tab");
const TITLE = "Backgrounds";


const BackgroundsTab = tabify({id: ID, title: TITLE, Component: () => {
  const board = useSelector(bd.opened);
  const dispatch = useDispatch();


  function setTheme(theme: COLORS.Name) {
    dispatch(bd.edit({idBoard: board.id, theme}));
  }


  return (
    board ? (
      
      <ul className={s.bgs}>
        {COLORS.ALL.map(({id, name}) => 
          <li key={id}>
            <button 
              type="button" 
              onClick={() => setTheme(name)} 
              className={classNames(s[name], {[s.selected]: name === board.theme})}
            />
          </li>
        )}
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


TABS.push({
  id: ID, 
  Component: BackgroundsTab,
});


export {
  ID as ID,
  ID as BACKGROUNDS_TAB_ID,
  BackgroundsTab as default,
  BackgroundsTab as BackgroundsTab,
};