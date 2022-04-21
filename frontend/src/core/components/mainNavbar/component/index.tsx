import s from "./style";
import bd from "/boards";
import React from "react";
import classNames from "classnames";

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {LIST_POPUP_ID} from "../list";
import {BOARDS_POPUP_ID} from "/popups/boards";
import {ACCOUNT_POPUP_ID} from "/popups/account";

import * as MODULIFY from "/components/modulify";
import * as POPUPIFY from "/components/popupify";
import * as BOARD_CREATOR from "/modules/boardCreator";


function Navbar() {
  const theme = useSelector(bd.opened.theme);


  return (
    <>
      <nav className={classNames(s.navbar, s[theme])}>

        <h1 className={s.brand}>
          <Link className={s["brand-text"]} to="/">Mono</Link>
        </h1>

        <Link className={s.home} to="/" />
        <Link className={s.search} to="/search" />

        <MODULIFY.Toggler
          action="open"
          target={BOARD_CREATOR.ID}
          className={s.create} 
        />

        <POPUPIFY.Toggler 
          target={BOARDS_POPUP_ID}
          className={s.boards}
        />

        <POPUPIFY.Toggler 
          target={ACCOUNT_POPUP_ID} 
          className={s.account} 
        />

        <POPUPIFY.Toggler 
          target={LIST_POPUP_ID}
          className={s.list}
        />
      </nav>
    </>
  ); 
}


export default React.memo(Navbar);