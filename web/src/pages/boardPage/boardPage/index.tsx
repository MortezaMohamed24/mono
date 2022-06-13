import S from "./style";
import GL from "/features/global";
import BD from "/features/boards";
import React from "react";
import SideMenu from "../boardSideMenu";
import {useState} from "react";
import ListsPanel from "/pages/boardPage/boardPageListsPanel";
import classNames from "classnames";
import BoardNavbar from "../boardPageNavbar";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import WithMainNavbar from "/templates/withMainNavbar";

import {Labler} from "/components/cardLabelerPopup";
import {Deleter} from "/components/deleterPopup";
import {Redirect} from "react-router";
import {LabelEditor} from "/components/labelEditorPopup";
import {LabelCreator} from "/components/labelCreatorPopup";
import {BoardListMoverPopup} from "../listMoverPopup";
import {BoardListCopierPopup} from "../listCopierPopup";
import {BoardListDorterPopup} from "../listSorterPopup";
import {BoardListOptionsPopup} from "../listOptionsPopup";
import {BoardListCardCreatorMoverPopup} from "../listCardCreatorMoverPopup";
import {BoardListAllOwnCardsMoverPopup} from "../listAllOwnCardsMoverPopup";
import {BoardListCardCreatorOptionsPopup} from "../listCardCreatorOptionsPopup";
import {BoardListCardCreatorLabelerPopup} from "../listCardCreatorLabelerPopup";


interface Props {
  match: {params: {idBoard: string}};
}

const equals = (vA: Props, vB: Props) => (
  vA.match.params.idBoard === vB.match.params.idBoard
);


const BoardPage = React.memo<Props>(({match: {params: {idBoard}}}) => {
  const board = useSelector(BD.one(idBoard));
  const dispatch = useDispatch();
  const [status, setStatus] = useState<string>("idle");


  useEffect(() => {
    if (board) {
      dispatch(GL.BoardOpened({idBoard}));
      setStatus("opened");
    } 
    
    else {
      dispatch(GL.BoardClosed());
      setStatus("closed");
    }

    return () => {
      dispatch(GL.BoardClosed());
      setStatus("closed");
    };
  }, [idBoard]);


  if (status === "idle") {
    return <p>loading</p>;
  } else if (status === "closed") {
    return null;
  } else if (!board) {
    return <Redirect to="/404/board" />;
  }

  
  return (
    <>
      <WithMainNavbar>
        <section className={classNames(S.board, S[board?.theme])}>
          <BoardNavbar />
          <ListsPanel />
        </section>
      </WithMainNavbar>
      
      <Labler /> 
      <Deleter /> 
      <LabelEditor /> 
      <LabelCreator /> 

      <BoardListMoverPopup />
      <BoardListCopierPopup />
      <BoardListDorterPopup />
      <BoardListOptionsPopup />
      <BoardListCardCreatorMoverPopup />
      <BoardListAllOwnCardsMoverPopup />
      <BoardListCardCreatorOptionsPopup />
      <BoardListCardCreatorLabelerPopup />
    </>
  );
}, equals);


export default BoardPage;