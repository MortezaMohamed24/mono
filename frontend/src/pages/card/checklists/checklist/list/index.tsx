import s from "./style";
import React from "react";
import Checkitem from "./checkitem";
import {ChecklistNative} from "/checklists/entity";


interface Props {
  filter: ChecklistNative["filter"];
  idCheckitems: string[];
}


const List = ({idCheckitems, filter}: Props) => (
  <ul className={s.list}>
    {idCheckitems.map(idCheckitem =>
      <Checkitem
        key={idCheckitem}
        filter={filter}
        idCheckitem={idCheckitem}
      /> 
    )}
  </ul>
);


export default React.memo(List);