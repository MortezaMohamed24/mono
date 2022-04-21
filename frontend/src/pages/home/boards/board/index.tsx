import s from "./style";
import bd from "/boards";
import React from "react";
import idAttr from "/util/dom/idAttr";
import classnames from "classnames";

import {Link} from "react-router-dom";
import {useRef} from "react";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import * as OPTIONS from "/pages/home/popups/options";


const Board = React.memo(({idBoard}: {idBoard: string}) => {
  const url = `/boards/${idBoard}`;
  const [id] = useState<string>(idAttr);
  const star = useRef<null | HTMLButtonElement>(null);
  const menu = useRef<{node?: null | HTMLButtonElement}>({}).current;
  const board = useSelector(bd.one({id: idBoard}));
  const dispatch  = useDispatch();
  const classname = board ? classnames(s.board, s[board.theme], {[s.starred]: board.isStarred}) : undefined;


  function toggleStar() {
    if (board) {
      dispatch(bd.edit({idBoard, isStarred: !board.isStarred}));
    }
  }

  function preventDefault(event: React.MouseEvent) {
    if (event.target === star.current || event.target === menu.node) {
      event.preventDefault();
    }
  }


  return board ? (
    <Link id={id} to={url} className={classname} onClickCapture={preventDefault}>
      <h3>
        {board.title || "Untitled"}
      </h3>

      <button 
        ref={star} 
        type="button" 
        onClick={toggleStar} 
      />

      <Toggler
        meta={menu}
        target={OPTIONS.ID} 
        payload={{idBoard}}
        reference={`#${id}`}
      />

    </Link>
  ) : null;
});


export default Board;