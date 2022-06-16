import s from "./style";
import btn from "/style/button/style";
import React from "react";
import loopMap from "/util/array/loopMap";
import useOnOuterClick from "../../util/a11y/clicks/useOnOuterClick";

import {Props} from "./types";
import {format} from "./util";
import {useRef} from "react";
import {useState} from "react";
import {PopupName} from "./types";
import {useEffect} from "react";
import {usePopper} from "react-popper";
import {TimeSuffix} from "./types";
import {popperOptions} from "./util";


const TimePicker = React.memo(({meta = {}, initial}: Props) => {

  const [hours, setHours] = useState<string>("01");
  const [suffix, setSuffix] = useState<TimeSuffix>("AM"); 
  const [minutes, setMinutes] = useState<string>("00");
  
  const [interior, setInterior] = useState<HTMLDivElement | null>(null);

  const [ref, setRef] = useState<HTMLButtonElement | null>(null);
  const [popper, setPopper] = useState<HTMLUListElement | null>(null);
  const {styles, attributes} = usePopper(ref, popper, popperOptions());
  
  const openedPopup = useRef<HTMLElement | null>(null);
  const [openedPopupName, setOpenedPopupName] = useState<PopupName | null>(null);


  /** Sets tmie to `date` */
  function set(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let suffix: TimeSuffix = "AM";

    if (hours > 12) {
      hours = hours - 12;
      suffix = "PM";
    }

    setHours(format(hours));
    setSuffix(suffix);
    setMinutes(format(minutes));
  }
  
  /** Closes the popup specified by `popupName` */
  function open(popupName: PopupName) {
    setOpenedPopupName(popupName);
  }

  /** Closes the opened popup */
  function close() {
    setOpenedPopupName(null);
  }

  /** Toggles the popup specified by `popupName` */
  function toggle(popupName: PopupName) {
    popupName === popupName ? close() : open(popupName);
  }


  // ---- popups ----

  function HoursPopup() {
    return (
      <ul className={s.list} ref={setPopper} style={{...styles.popper}} {...attributes.popper}>
        {loopMap(12, i => (
          <li key={i}>
            <button
              type="button" 
              onClick={() => setHours(format(i))}
              children={format(i)} 
              className={i === +hours ? s.selected : undefined}
            />
          </li>
        ))}
      </ul>
    );
  }

  function SuffixPopup() {
    return (
      <ul className={s.list} ref={setPopper} style={{...styles.popper}} {...attributes.popper}>
        <li>
          <button 
            type="button"
            onClick={() => setSuffix("AM")}
            children="AM"
            className={suffix === "AM" ? s.selected : undefined}
          />
        </li>
        
        <li>
          <button
            type="button"
            onClick={() => setSuffix("PM")}
            children="PM"
            className={suffix === "PM" ? s.selected : undefined}
          />
        </li>
      </ul>
    );
  }

  function MinutesPopup() {
    return (
      <ul className={s.list} ref={setPopper} style={{...styles.popper}} {...attributes.popper}>
        {loopMap(60, i => (
          <li key={i}>
            <button 
              type="button" 
              onClick={() => setMinutes(format(i))}
              children={format(i)} 
              className={i === +minutes ? s.selected : undefined}
            />
          </li>
        ))}
      </ul>
    )
  }


  // ---- effects ----

  useEffect(() => {
    if (initial === undefined) {
      set(new Date());
    } else if (typeof initial === "number") {
      set(new Date(initial));
    } else if (initial instanceof Date) {
      set(new Date(initial.getTime()));
    } else {
      const date = new Date();
  
      date.setHours(initial.hours);
      date.setMinutes(initial.minutes);
  
      set(date);
    }
  }, []);

  useEffect(() => {
    const date = new Date();

    date.setHours(suffix === "AM" ? +hours : +hours + 12);
    date.setMinutes(+minutes);

    meta.value = date;
  });

  useEffect(() => {
    if (openedPopup.current) {
      openedPopup.current.scrollIntoView();
      openedPopup.current.focus();
    }
  }, [openedPopup.current]);

  useOnOuterClick(interior, close);


  // ---- JSX ----

  return (
    <div className={s.field}>
      <div ref={setInterior}>
        <button
          ref={openedPopupName === "Hours" ? setRef : undefined}
          type="button"
          onClick={() => toggle("Hours")}
          children={hours}
          className={btn.gray}
        />

        {":"}

        <button
          ref={openedPopupName === "Minutes" ? setRef : undefined}
          type="button"
          onClick={() => toggle("Minutes")}
          children={minutes}
          className={btn.gray}
        />

        <button
          ref={openedPopupName === "Suffix" ? setRef : undefined}
          type="button"
          onClick={() => toggle("Suffix")}
          children={suffix}
          className={btn.gray}
        />

        {openedPopupName === "Hours" ? <HoursPopup /> : null}
        {openedPopupName === "Suffix" ? <SuffixPopup /> : null}
        {openedPopupName === "Minutes" ? <MinutesPopup /> : null}
      </div>
    </div>
  );
});


export default TimePicker;