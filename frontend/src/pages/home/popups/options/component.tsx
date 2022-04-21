import bd from "/boards";
import ps from "/components/popupify/style";
import React from "react";
import popupify from "/components/popupify";

import {ID} from "./constants";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import * as THEMER from "../themer";
import * as RENAMER from "../renamer";
import * as DELETER from "/popups/deleter";


const BoardOptionsPopup = popupify(ID, ({payload: {idBoard}, reference}) => {
  const board = useSelector(bd.one({id: idBoard}));
  const dispatch = useDispatch();


  function destroy() {
    console.log("Comited ", board)
    if (board) {
      dispatch(bd.destroy({idBoard}));
    }
  }

  function toggleStar() {
    if (board) {
      dispatch(bd.edit({
        idBoard: idBoard,
        isStarred: !board.isStarred,
      }));
    }
  }


  return (
    <>
      <Header title={board?.title || "Non Existing Board!"} />

      <section className={ps.body}>
        {board ? (
          <ul className={ps.list}>

            <li className={ps.li}>
              <Toggler
                action="forward"
                target={RENAMER.ID}
                payload={{idBoard}}
                children="Rename"
                reference={reference}
                className={ps.btn}
              />
            </li>

            <li className={ps.li}>
              <Toggler
                action="close"
                onClick={toggleStar}
                children={board.isStarred ? "Unstar" : "Star"}
                disabled={!board}
                className={ps.btn} 
              />
            </li>

            <li className={ps.li}>
              <Toggler
                action="forward"
                target={THEMER.ID}
                children="Change theme"
                payload={{idBoard}}
                reference={reference}
                className={ps.btn}
              />
            </li>

            <li className={ps.li}>
              <Toggler
                action="forward"
                target={DELETER.ID}
                payload={{
                  title: "Delete board?",
                  body: `Are you sure you want to delete board: ${board.title || "Untitled"}`,
                  commit: destroy,
                }}
                children="Delete"
                disabled={!board}
                reference={reference}
                className={ps.btn}
              />
            </li>

          </ul>
        ) : (

          <p>
            Unexpected error: Could not find target board.
            <b />
            try reloading the page.
          </p>
          
        )}
      </section>

    </>
  );
});


export default BoardOptionsPopup;