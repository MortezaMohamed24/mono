import s from "./style";
import ll from "/labels";
import bd from "/boards/selectors";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import idAttr from "/util/dom/idAttr";
import classNames from "classnames";

import {ID} from "../constants";
import {useRef} from "react";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {MIN_NAME_LENGTH} from "/labels/fields/constants";
import {MAX_NAME_LENGTH} from "/labels/fields/constants";

import * as INPUT from "/components/input/stateless";
import * as COLORS from "/labels/constants/colors";


const LableCreatorPopup = popupify(ID, () => {
  const input = useRef<INPUT.Meta>({}).current;
  const idBoard = useSelector(bd.opened.id);
  const dispatch = useDispatch();
  const [idInput] = useState<string>(idAttr);
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<COLORS.Name>(COLORS.BLUE.name);
  const [isNameValid, setNameValidity] = useState<boolean>(false);
  

  function commit() {
    if (isNameValid) {
      dispatch(ll.create({
        name: name || null, 
        color: color, 
        idBoard: idBoard,
      }));
    }
  }

  function onOpen() {
    setName("New Label");
    input.select?.();
  }


  useEffect(() => {
    onOpen();
  }, []);


  return (
    <>
      <Header title="Create label" />

      <section className={ps.body}>
        <h3 className={type.h6}>
          <label htmlFor={idInput}>Name</label>
        </h3>
       
        <INPUT.Input
          id={idInput}
          min={MIN_NAME_LENGTH}
          max={MAX_NAME_LENGTH}
          type="text"
          meta={input}
          value={name}
          styled={true}
          onValue={setName}
          required={false}
          onValidity={setNameValidity}
          placeholder="Enter name..."
        />
        
        <h3 className={type.h6}>
          Select Color
        </h3>

        <ul className={s.colors}>
          {COLORS.ALL.map(({id, name}) => 
            <li key={id}>
              <button 
                className={classNames(s.color, s[name], {[s.selected]: color === name})} 
                onClick={() => setColor(name)}
              />
            </li>
          )}
        </ul>
      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          disabled={!name || !isNameValid}
          children="Create"
          className={btn.blue}
        />
      </footer>
    </>
  );
});


export default LableCreatorPopup;