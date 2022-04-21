import s from "./style";
import ps from "/components/popupify/style";
import bd from "/boards";
import React from "react";
import classNames from "classnames";

import {ID} from "../constants";
import {Header} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useDispatch, useSelector} from "react-redux";

import * as COLORS from "/boards/colors";


const Themer = popupify(ID, ({payload: {idBoard}}) => {
  const board = useSelector(bd.one({id: idBoard}));
  const dispatch = useDispatch();


  function setTheme(newTheme: COLORS.Name) {
    dispatch(bd.edit({idBoard, theme: newTheme}));
  }


  return (
    <>
      <Header title="Pick a color" />

      <section className={`${ps.body} ${s.body}`}>
        {board ? (

          <ul>
            {COLORS.ALL.map(({id, name}) => 
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setTheme(name)} 
                  className={classNames(s[name], {[s.selected]: name === board.theme })} 
                />
              </li>
            )}
          </ul>

        ) : (

          <p>
            Unexpected error occured: Could not find target board.
            <br />
            <br />
            Try reloading the page.
          </p>

        )}
      </section>
    </>
  );
});


export default Themer;