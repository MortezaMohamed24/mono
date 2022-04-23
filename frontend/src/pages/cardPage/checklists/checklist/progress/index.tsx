import s from "./style";
import cm from "/features/checkitems";
import React from "react";
import DeepEquals from "/util/object/deepEquals";
import classNames from "classnames";
import typeography from "/style/typeography/style";
import {useSelector} from "react-redux";


const equals = DeepEquals<{
  total: number; 
  complete: number;
}>();


const Progress = ({idChecklist}: {idChecklist: string}) => {
  const {total, complete} = useSelector(cm.count({idChecklist}), equals);

  
  const percent = total > 0 ? `${Math.ceil(complete / (total / 100))}%` : "0%";
  

  return (
    <div className={classNames(s.progress, {[s.complete]: percent === "100%"})}>

      <p className={typeography.xxs}>
        {percent}
      </p>

      <div>
        <div style={{width: percent}} />
      </div>

    </div>
  );
};


export default React.memo(Progress);