import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import popupify from "/components/popupify";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {BOARD_LIST_CARD_CREATOR_MOVER_POPUP_ID} from "../listCardCreatorMoverPopup";
import {BOARD_LIST_CARD_CREATOR_LABELER_POPUP_ID} from "../listCardCreatorLabelerPopup";


const BoardListCardCreatorOptionsPopup = popupify(ID, ({reference}) => (
  <>
    <Header title="Card options" />

    <section className={ps.body}>
      <ul className={ps.list}>

        <li className={ps.li}>
          <Toggler 
            action="forward"
            target={BOARD_LIST_CARD_CREATOR_LABELER_POPUP_ID}
            children="Labels..."
            reference={reference}
            className={ps.btn}
          />
        </li>

        <li className={ps.li}>
          <Toggler 
            action="forward"
            target={BOARD_LIST_CARD_CREATOR_MOVER_POPUP_ID}
            children="Position..."
            reference={reference}
            className={ps.btn}
          />
        </li>

      </ul>
    </section>
  </>
));


export default BoardListCardCreatorOptionsPopup;