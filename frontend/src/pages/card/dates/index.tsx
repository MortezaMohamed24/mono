import s from "./style";
import cd from "/cards";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import Status from "./status";
import Checkbox from "/components/checkbox/stateless";
import {Toggler} from "/components/popupify";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {CARD_DATES_POPUP_ID} from "/popups/cardDates";
import DatesToDateTimeString from "./datesToDateTimeString";


const Dates = React.memo(() => {
  const card = useSelector(cd.opened);
  const dispatch = useDispatch();


  if ((
    !card
  ) || (
    card.dateDue === null && card.dateStart === null
  )) {
    return null;
  }


  function setCompleteness(isComplete: boolean) {
    if (isComplete !== card.isComplete) {
      dispatch(cd.edit({idCard: card.id, isComplete}));
    }
  }


  return (
    <section className={s.dates}>

      <h2 className={type.caption}>
        {
          (card.dateStart !== null && card.dateDue !== null) 
            ? "Dates"
            : card.dateStart !== null 
              ? "Start date"
              : card.dateDue !== null
                ? "Due date"
                : "Never"
        }
      </h2>

      <Checkbox 
        checked={card.isComplete} 
        onChange={setCompleteness} 
      />

      <Toggler zIndex={15} target={CARD_DATES_POPUP_ID} payload={{idCard: card.id}} className={btn.gray}>

        <DatesToDateTimeString 
          dateDue={card.dateDue} 
          dateStart={card.dateStart}
        />

        <Status 
          dateDue={card.dateDue} 
          dateStart={card.dateStart} 
          isComplete={card.isComplete} 
        />

      </Toggler>
    </section>
  );
});


export default Dates;