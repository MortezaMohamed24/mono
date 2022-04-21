import s from "./style";
import cd from "/cards";
import btn from "/style/button/style";
import React from "react";
import ellipsify from "/util/string/ellipsify";
import {Toggler} from "/components/popupify";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {DELETER_POPUP_ID} from "/popups/deleter";
import {LABELER_POPUP_ID} from "/popups/cardLabeler";
import {CARD_DATES_POPUP_ID} from "/popups/cardDates";
import {CARD_MOVER_POPUP_ID} from "/popups/cardMover";
import {CARD_COPIER_POPUP_ID} from "/popups/cardCopier";
import {CHECKLIST_CREATOR_POPUP_ID}  from "../checklists/checklist/popups/checklistCreator";


const Actions = () => {
  const card = useSelector(cd.opened);
  const dispatch = useDispatch();


  function destroy() {
    if (card) {
      dispatch(cd.destroy({idCard: card.id}));
    }
  }

  function toggleWatch() {
    if (card) {
      dispatch(cd.edit({idCard: card.id, isWatched: !card.isWatched}));
    }
  }


  return (
    <section className={s.actions}>
      <h2>Add to card</h2>

      {/* <Toggler
        action="toggle"
        // target={"CARD_MEMBERS_POPUP"}
        // zIndex={15}
        // payload={idCard}
        children="Members"
        reference="this"
        className={btn.gray}
      /> */}

      <Toggler
        action="toggle"
        zIndex={15}
        target={LABELER_POPUP_ID}
        payload={{idCard: card.id}}
        children="Labels"
        reference="this"
        className={btn.gray}
      />

      <Toggler
        action="toggle"
        zIndex={15}
        target={CHECKLIST_CREATOR_POPUP_ID}
        payload={{idCard: card.id}}
        children="Checklist"
        reference="this"
        className={btn.gray}
      />

      <Toggler
        action="toggle"
        target={CARD_DATES_POPUP_ID}
        zIndex={15}
        payload={{idCard: card.id}}
        children="Dates"
        reference="this"
        className={btn.gray}
      />

      {/* <Toggler
        action="toggle"
        zIndex={15}
        // target={CARD_ATTACHMENTS_POPUP}
        children="Attachment"
        reference="this"
        className={btn.gray}
      /> */}

      <button 
        type="button"
        children="Location"
        className={btn.gray}
      />

      <button 
        type="button"
        children="Cover"
        className={btn.gray}
      />
      
      <button 
        type="button"
        children="Custom fields"
        className={btn.gray}
      />

      <h2>Actions</h2>

      <Toggler 
        action="toggle"
        zIndex={15}
        target={CARD_MOVER_POPUP_ID}
        payload={{idCard: card.id}}
        children="Move"
        reference="this"
        className={btn.gray}
      />
      <Toggler 
        action="toggle"
        zIndex={15}
        target={CARD_COPIER_POPUP_ID}
        payload={{idCard: card.id}}
        children="Copy"
        reference="this"
        className={btn.gray}
      />
      {/* <Toggler 
        action="toggle"
        zIndex={15}
        payload={"Undefined yet"}
        children="Make template"
        reference="this"
        className={btn.gray}
      /> */}
      <button
        type="button"
        onClick={toggleWatch}
        children={card.isWatched ? "Unwatch" : "Watch"}
        className={btn.gray}
      />
      <Toggler 
        action="toggle"
        zIndex={15}
        target={DELETER_POPUP_ID}
        payload={{
          title: `Delete: ${card.title ? ellipsify(card.title, 10) : "Untitled"}?`,
          body: `Are you sure you want to delete card: ${card.title || "Untitled"}`,
          commit: destroy,
        }}
        children="Delete"
        reference="this"
        className={btn.gray}
      />
      {/* <Toggler 
        action="toggle"
        zIndex={15}
        payload={"Not implemented yet"}
        children="Share"
        reference="this"
        className={btn.gray}
      /> */}
    </section>
  );
};


export default React.memo(Actions);