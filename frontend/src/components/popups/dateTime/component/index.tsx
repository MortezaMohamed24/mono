import s from "./style";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import React from "react";
import popupify from "/components/popupify";

import {ID} from "../constants";
import {useRef} from "react";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";

import * as CALENDAR from "/components/calendar";
import * as TIME_PICKER from "/components/timePicker";


const DateTimePopup = popupify(ID, ({payload: {save, initialDate, initialTime}}) => {
  const date = useRef<CALENDAR.Meta>({}).current;
  const time = useRef<TIME_PICKER.Meta>({}).current;


  function onSave() {
    if (date.value && time.value) {
      save(new Date(
        date.value.getFullYear(),
        date.value.getMonth(),
        date.value.getDate(),
        time.value.getHours(),
        time.value.getMinutes(),
      ));
    }
  }


  return (
    <>
      <Header title="Date picker" />

      <section className={`${ps.body} ${s.body}`}>

        <CALENDAR.Component 
          meta={date} 
          initial={initialDate} 
        />

        <TIME_PICKER.TimePicker 
          meta={time} 
          initial={initialTime} 
        />

      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={onSave}
          disabled={!save}
          children="Pick!"
          className={btn.blue} 
        />
      </footer>
    </>
  );
});


export default DateTimePopup;