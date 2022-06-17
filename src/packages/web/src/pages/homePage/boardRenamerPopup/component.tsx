import bd from "/features/boards";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import stop from "/util/event/stop";
import React from "react";
import idAttr from "/util/dom/idAttr";
import popupify from "/components/popupify";

import {ID} from "./constants";
import {close} from "/components/popupify";
import {Header} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MAX_TITLE_LENGTH} from "/features/boards/fields/constants";
import {MIN_TITLE_LENGTH} from "/features/boards/fields/constants";

import  * as TEXTAREA from "/components/textarea/statefull";


const BoardRenamerPopup = popupify(ID, ({payload: {idBoard}}) => {

  // ---- state ----

  const board = useSelector(bd.one({id: idBoard}));
  const dispatch = useDispatch();
  const [txtArea] = useState<TEXTAREA.Meta>({});
  const [txtAreaId] = useState(idAttr);
  const [titleIsValid, setTitleIsValid] = useState<boolean>(false);


  // ---- functions ----

  function commit() {
    if (board && txtArea.value && titleIsValid) {
      dispatch(bd.edit({ 
        title: txtArea.value,
        idBoard: idBoard,
      }));

      dispatch(close({
        id: ID,
      }));
    }
  }

  function onOpen() {
    txtArea.set?.(board?.title || "Unkown board!");
    txtArea.select?.();
  }

  function onKeyDownForTextArea(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      commit();
      stop(event);
    }
  }


  // ---- effects ----

  useEffect(() => {
    onOpen();
  },  []);
 

  // ---- JSX ----

  return (
    <>
      <Header title="Rename board" />

      {board ? (
        
        <>
          <section className={ps.body}>
            <h3>
              <label htmlFor={txtAreaId}>Enter new name</label>
            </h3>

            <TEXTAREA.Textarea
              id={txtAreaId}
              min={MIN_TITLE_LENGTH}
              max={MAX_TITLE_LENGTH}
              meta={txtArea}
              styled={true}
              oneLine={true}
              required={true}
              onKeyDown={onKeyDownForTextArea} 
              onValidity={setTitleIsValid}
              placeholder="New name"
            />
          </section>

          <footer className={ps.footer}>
            <button
              type="button"
              children="Rename"
              onClick={commit}
              disabled={!titleIsValid}
              className={btn.blue}
            />
          </footer>
        </>

      ) : (

        <p>
          Unexpected error occured: Could not find target board.
          <br />
          <br />
          Try reloading the page.
        </p>

      )}
    </>
  );
});


export default BoardRenamerPopup;