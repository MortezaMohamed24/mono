import s from "./style";
import bd from "/features/boards";
import React from "react";
import classnames from "classnames";

import {Link} from "react-router-dom";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


interface Props {
  idBoard: string;
  className?: string;
}


const Board = ({idBoard, className}: Props) => {
  // ---- state ----

  const url = `/boards/${idBoard}`;
  const star = useRef<HTMLButtonElement | null>(null);
  const board = useSelector(bd.one({id: idBoard}));
  const dispatch  = useDispatch();
  const classname = board ? classnames(className, s.board, s[board.theme], {[s.starred]: board.isStarred}) : undefined;


  // ---- functions ----

  function toggleIsStar() {
    if (board) {
      dispatch(bd.edit({
        idBoard: board.id, 
        isStarred: !board.isStarred,
      }));
    }
  }

  function preventDefault(event: React.SyntheticEvent) {
    if (event.target === star.current) {
      event.preventDefault();
    }
  }


  // ---- JSX ----

  return board ? (
    <Link to={url} title={board.title} className={classname} onClickCapture={preventDefault}>

      <h3>{board.title}</h3>

      <button ref={star} onClick={toggleIsStar} />

    </Link>
  ) : null;
};


export default React.memo(Board);