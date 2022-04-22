import s from "./style";
import ps from "/components/popupify/style";
import ll from "/features/labels";
import btn from "/style/button/style";
import React from "react";
import idAttr from "/util/dom/idAttr";
import popupify from "/components/popupify";
import classNames from "classnames";
import typeography from "/style/typeography/style";

import {ID} from "../constants";
import {Header} from "/components/popupify";
import {useRef} from "react";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import * as INPUT from "/components/input/stateless";
import * as COLORS from "/features/labels/constants/colors";


const LableEditorPopup = popupify(ID, ({payload: idLabel}) => {
  const label = useSelector(ll.one({id: idLabel}))
  
  const nameMeta = useRef<INPUT.Meta>({}).current;
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<COLORS.Name | undefined>(label?.color);
  const [isNameValid, setNameValidity] = useState<boolean>(false);
  
  const dispatch = useDispatch();
  const [idInput] = useState<string>(idAttr);


  function edit() {
    if (label && color) {
      dispatch(ll.edit({ 
        name: name ? name : null, 
        color: color, 
        idLabel: label.id, 
      }));
    }
  }

  function onOpen() {
    if (label) {
      setName(label.name || "");
      nameMeta.select?.();
      setColor(label.color);
    }
  }

  function destroy() {
    if (label) {
      dispatch(ll.destroy({idLabel}));
    }
  }


  useEffect(() => {
    onOpen();
  }, []);


  return (
    <>
      <Header title="Edit label" />

      {label ? (
        <>
          <section className={ps.body}>
            <h3 className={typeography.h6}>
              <label htmlFor={idInput}>Name</label>
            </h3>
          
            <INPUT.Input
              id={idInput}
              type="text"
              meta={nameMeta}
              value={name}
              styled={true}
              onValue={setName}
              required={false}
              onValidity={setNameValidity}
              placeholder="Enter name..."
            />
            
            <h3 className={typeography.h6}>Select Color</h3>

            <ul className={s.colors}>
              {COLORS.ALL.map(({id, name}) => 
                <li key={id}>
                  <button 
                    onClick={() => setColor(name)}
                    className={classNames(s.color, s[name], {[s.selected]: color === name})} 
                  />
                </li>
              )}
            </ul>
          </section>
          
          <footer className={`${ps.footer} ${s.footer}`}>
            <Toggler
              action="close"
              onClick={edit}
              children="Update"
              disabled={!isNameValid || !color}
              className={btn.blue}
            />

            <Toggler
              action="close"
              onClick={destroy}
              children="Delete"
              className={btn.red}
            />
          </footer>
        </>
      ) : (
        <section className={ps.body}>
          <p>Error: Couldn't find label</p>
        </section>
      )}
    </>
  )
});


export default LableEditorPopup;