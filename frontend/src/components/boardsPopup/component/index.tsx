import s from "./style";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import View from "./view";
import React from "react";
import Search from "./search";

import {ID} from "../constants";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";

import * as INPUT from "/components/inputDeferer";
import * as MODULIFY from "/components/modulify";
import * as POPUPIFY from "/components/popupify";
import * as BOARD_CREATOR from "/components/boardCreatorModule";


const Boards = POPUPIFY.popupify(ID, () => {
  const query = useRef<INPUT.Meta>({}).current;
  const [queryValue, setQueryValue] = useState<string>("");


  useEffect(() => {
    query.focus?.();
  }, []);


  return (
    <>
      <section className={s.header}>
        <INPUT.default 
          meta={query}
          value={queryValue}
          styled={true}
          onValue={setQueryValue}
          placeholder="Find boards by name..."
        />

        <POPUPIFY.Toggler
          target={ID}
          action="close" 
          className={s.close} 
        />
      </section>

      <section className={ps.body}>
        {queryValue ? <Search query={queryValue} /> : <View />}
      </section>

      <section className={ps.footer}>
        <MODULIFY.Toggler
          action="open"
          target={BOARD_CREATOR.ID}
          onClick={() => POPUPIFY.close(ID)} 
          children="Add a new board"
          className={`${btn.gray} ${btn.block}`} 
        />
      </section>
    </>
  );
});


export default Boards;