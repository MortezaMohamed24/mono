import s from "./style";
import ps from "/components/popupify/style";
import cd from "/features/cards"; 
import btn from "/style/button/style";
import {ID} from "../constants";
import React from "react";
import popupify from "/components/popupify";
import {Header} from "/components/popupify";
import typeography from "/style/typeography/style";
import {Toggler} from "/components/popupify";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import * as DATE_TIME from "/components/dateTimePopup";


const CardDatesPopup = popupify(ID, ({payload: {idCard}}) => {
  const card = useSelector(cd.one({id: idCard}));
  const dateDue = card?.dateStart ?? undefined;
  const dispatch = useDispatch();
  const dateStart = card?.dateStart ?? undefined;


  function setDateDue(date: Date) {
    dispatch(cd.edit({
      idCard: idCard, 
      dateDue: date.getTime(),
    }));
  }

  function setDateStart(date: Date) {
    dispatch(cd.edit({
      idCard: idCard, 
      dateStart: date.getTime(),
    }));
  }
  
  function removeDateDue() {
    dispatch(cd.edit({idCard: idCard, dateDue: null}));
  }

  function removeDateStart() {
    dispatch(cd.edit({idCard: idCard, dateStart:  null}));
  }


  return (
    <>
      <Header title="Card Dates" />

      <section className={`${ps.body} ${s.body}`}>
        {card ? (
          <>
            <div>
              <h3 className={typeography.caption}>
                Start date
              </h3>

              <p>
                {card.dateStart ? new Date(card.dateStart).toDateString() : "Not specified."}
              </p>

              <Toggler
                action="join"
                target={DATE_TIME.ID}
                payload={{
                  save: setDateStart, 
                  initialDate: dateStart, 
                  initialTime: dateStart,
                }}
                children={card.dateStart ? "Change" : "Add"}
                className={`${btn.gray} ${btn.sm}`}
              />

              {dateStart ? (
                <button
                  key="mono"
                  type="button"
                  onClick={removeDateStart}
                  children="Remove"
                  className={`${btn.gray} ${btn.sm}`}
                />
              ) : (
                null
              )}
            </div>

            <div>
              <h3 className={typeography.caption}>Due date</h3>
              <p>{dateDue ? new Date(dateDue).toDateString() : "Not specified."}</p>
              
              <Toggler
                action="join"
                target={DATE_TIME.ID}
                payload={{
                  save: setDateDue, 
                  initialDate: dateDue, 
                  initialTime: dateDue,
                }}
                children={dateDue ? "Change" : "Add"}
                className={`${btn.gray} ${btn.sm}`}
              />
              
              {dateDue ? (
                <button
                  type="button"
                  onClick={removeDateDue}
                  children="Remove"
                  className={`${btn.gray} ${btn.sm}`}
                />
              ) : (
                null
              )}
            </div>
          </>
        ) : (
          <p>Unexpected error occured: Could not find target card💀</p>
        )}

      </section>

      <footer className={ps.footer}>
        <p className={typeography.sm}>The date format used to display dates is yyyy/mm/dd hh:mm</p>
      </footer>
    </>
  );
});


export default CardDatesPopup;