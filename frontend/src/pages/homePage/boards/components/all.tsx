import s from "./style";
import bd from "/features/boards";
import React from "react";
import Board from "../board";
import typeography from "/style/typeography/style";
import {useSelector} from "react-redux";


const AllBoards = () => {
  const ids = useSelector(bd.ids);


  return ids.length > 0 ? (
    <section className={s.self}>

      <h2 className={`${s.all} ${typeography.h4}`}>
        All Boards
      </h2>

      <ul>
        {ids.map(id => 
          <li key={id}>
            <Board idBoard={id} />
          </li>
        )}
      </ul>

    </section>
  ) : null;
};


// component doesn't care about props
export default React.memo(AllBoards, () => true);