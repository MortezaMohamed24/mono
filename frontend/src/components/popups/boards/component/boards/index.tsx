import s from "./style";
import React from "react";
import Board from "./board";


interface Props {
  /** rendered if `idBoards` is empty */
  msg?: string | undefined | null;
  idBoards: readonly string[];
}


const Boards = React.memo(({msg, idBoards}: Props) => (
  <>
    {idBoards.length === 0 ? (
      msg ? <p>{msg}</p> : null
    ) : (
      idBoards.map(id => 
        <Board 
          key={id} 
          idBoard={id} 
          className={s.board} 
        />
      )
    )}
  </>
));


export default Boards;