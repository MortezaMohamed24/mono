import s from "./style";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import {ID} from "./constants";
import React from "react";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";


const ConfirmerPopup = popupify(ID, ({payload}) => (
  <>
    <Header title={payload.head} />

    <section className={ps.body}>
      <p>
        {payload.body}
      </p>
    </section>
    
    <footer className={`${ps.footer} ${s.footer}`}>
      <Toggler
        action="close"
        onClick={payload.onBtnAClicked}
        children={payload.btnAContent}
        className={btn[payload.btnAColor]}
      />

      <Toggler
        action="close"
        onClick={payload.onBtnBClicked}
        children={payload.btnBContent}
        className={btn[payload.btnBColor]}
      />
    </footer>
  </>
));


export default ConfirmerPopup;