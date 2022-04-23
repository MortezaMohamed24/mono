import cd from "/features/cards";
import React from "react";
import Checklist from "./checklist";
import {useSelector} from "react-redux";


const Checklists = () => {
  const idchecklists = useSelector(cd.opened.idChecklists);

  
  if (idchecklists) {
    return (
      <>
        {
          idchecklists.map(id => <Checklist key={id} idChecklist={id} />)
        }
      </>
    )
  }


  return null;
};


export default React.memo(Checklists);