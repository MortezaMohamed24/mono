import cd from "/cards";
import React from "react";
import Checklist from "./checklist";
import {useSelector} from "react-redux";


const Checklists = () => (
  <>
    {
      useSelector(cd.opened.idChecklists).map(id => <Checklist key={id} idChecklist={id} />)
    }
  </>
);


export default React.memo(Checklists);