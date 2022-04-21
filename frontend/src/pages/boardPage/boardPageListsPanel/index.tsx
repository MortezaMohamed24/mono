import s from "./style";
import bd from "/boards";
import React from "react";
import SideMenu from "../boardSideMenu";
import BoardList from "../list";
import {useSelector} from "/core/store";
import boardPanelify from "../boardPagePanel";
import BoardListCreator from "../listCreator";


const BoardPageListsPanel = boardPanelify(() => {
  const ids = useSelector(bd.opened.idLists);
  

  return (
    <>
      <div className={s.lists}>
        {ids.map(id => (
          <BoardList 
            key={id} 
            idList={id} 
          />
        ))}

        <BoardListCreator />
      </div>

      <SideMenu />
    </>
  );
});


export default BoardPageListsPanel;