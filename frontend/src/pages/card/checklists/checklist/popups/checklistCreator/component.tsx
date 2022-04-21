import ps from "/components/popupify/style";
import ct from "/checklists";
import btn from "/style/button/style";
import {ID} from "./constants";
import React from "react";
import Input from "/components/input/statefull";
import idAttr from "/util/dom/idAttr";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {InputMeta} from "/components/input/statefull";
import {useDispatch} from "react-redux";
import {MAX_TITLE_LENGTH} from "/checklists/fields/constants";
import {MIN_TITLE_LENGTH} from "/checklists/fields/constants";


const ChecklistCreatorPopup = popupify(ID, ({payload: {idCard}}) => {
  const [input] = useState<InputMeta>({});
  const dispatch = useDispatch();
  const [inputId] = useState<string>(idAttr);
  const [titleIsValid, setTitleIsValid] = useState<boolean>(false);


  function create() {
    if (input.value && titleIsValid) {
      dispatch(ct.create({idCard, title: input.value}));
    }
  }


  useEffect(() => {
    input.set?.("Checklist");
    input.select?.();
  });


  return (
    <>
      <Header title="Create checklist" />

      <section className={ps.body}>
        <h2>
          <label htmlFor={inputId}>
            Checklist Title
          </label>
        </h2>

        <Input 
          id={inputId}
          min={MIN_TITLE_LENGTH}
          max={MAX_TITLE_LENGTH}
          meta={input}
          type="text"
          styled={true}
          required={true}
          onValidity={setTitleIsValid}
        />
      </section>

      <footer className={ps.footer}>
        <Toggler 
          action="close"
          onClick={create}
          disabled={!titleIsValid}
          children="Create"
          className={btn.blue}
        />
      </footer>
    </>
  );
});


export default ChecklistCreatorPopup;