import ps from "/components/popupify/style";
import btn from "/style/button/style";
import {ID} from "./constants";
import React from "react";
import {useRef} from "react";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useEffect} from "react";


const DeleterPopup = popupify(ID, ({payload: {title, body, commit}}) => {
  const button = useRef<null | HTMLButtonElement>();


  useEffect(() => {
    button.current?.focus();
  })


  return (
    <>
      <Header title={title || "Delete"} />
  
      <section className={ps.body}>
        <p>{body}</p>
      </section>
      
      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          children="Delete"
          className={`${btn.red} ${btn.block}`}
        />
      </footer>
    </>
  )
});


export default DeleterPopup;