import s from "./style";
import ps from "/components/popupify/style";
import bd from "/features/boards";
import {ID} from "../constants";
import React from "react";
import {Header} from "/components/popupify";
import classNames from "classnames";
import {popupify} from "/components/popupify";
import {useDispatch} from "/store";
import {useSelector} from "/store";
import * as COLORS from "/features/boards/colors";
import {PopupToggler} from "/components/popupify";


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
                <PopupToggler
                  action="close"
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