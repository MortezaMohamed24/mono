import s from "./style";
import bd from "/features/boards";
import React from "react";
import Boards from "../boards";
import {useSelector} from "react-redux";


const Search = React.memo(({query}: {query: string}) => {
  const boards = bd.search(query, useSelector(bd.entities));


  return (
    <div className={s.list}>
      <Boards 
        msg="No matching boards" 
        idBoards={boards.map(board => board.id)} 
      />
    </div>
  );  
});


export default Search;