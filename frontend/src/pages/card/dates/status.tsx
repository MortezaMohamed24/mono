import s from "./style";
import badge from "/style/badge/style";
import React from "react";
import {getStatus} from "/util/cardDates";


interface Props {
  dateDue: number | null;
  dateStart: number | null;
  isComplete: boolean;
}

const Status = ({dateDue, dateStart, isComplete}: Props) => {
  switch (getStatus({dateDue, dateStart, isComplete})) {
    case "duesoon": return <span className={`${badge.yellow} ${s.status}`}>Due soon</span>;
    case "overdue": return <span className={`${badge.red} ${s.status}`}>Overdue</span>;
    case "complete": return <span className={`${badge.lime} ${s.status}`}>Complete</span>;
    default: return null;
  }
};


export default React.memo(Status);