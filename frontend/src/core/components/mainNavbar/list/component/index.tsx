import s from "./style";
import ps from "/components/popupify/style";
import React from "react";

import {ID} from "../constants";
import {Link} from "react-router-dom";
import {BOARDS_POPUP_ID} from "/popups/boards";
import {ACCOUNT_POPUP_ID} from "/popups/account";
import {BOARD_CREATOR_MODULE_ID} from "/modules/boardCreator";

import * as POPUPIFY from "/components/popupify";
import * as MODULIFY from "/components/modulify";


const List = POPUPIFY.popupify(ID, ({reference, id}) => (
  <>
    <POPUPIFY.Header title="Other Options" />

    <section className={`${ps.body} ${s.body}`}>
      <ul className={ps.list}>

        <li className={ps.li}>
          <POPUPIFY.Toggler 
            action="forward" 
            target={BOARDS_POPUP_ID} 
            children="Boards"
            className={ps.btn} 
            reference={reference}
          />
        </li>

        <li className={ps.li}>
          <Link 
            to="/search"
            onClick={() => POPUPIFY.close(id)}
            children="Search"
            className={ps.btn} 
          />
        </li>

        <li className={ps.li}>
          <MODULIFY.Toggler
            target={BOARD_CREATOR_MODULE_ID}
            action="open"
            children="Create Board"
            className={ps.btn} 
          />
        </li>

        <li className={ps.li}>
          <POPUPIFY.Toggler 
            action="forward" 
            target={ACCOUNT_POPUP_ID} 
            children="Account"
            className={ps.btn} 
            reference={reference}
          />
        </li>

      </ul>
    </section>
  </> 
));


export default List;