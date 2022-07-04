import s from "./style";
import badge from "/style/badge/style";
import React from "react";
import {Status} from "/util/cardDates";
import classNames from "classnames";
import {getStatus} from "/util/cardDates";
import {CardNative} from "/features/cards/entity";
import {getShorterDateStringOf} from "/util/cardDates";
import {is24HoursOrLessBeforeNow} from "/util/cardDates";


interface Props {
  dateDue: CardNative["dateDue"];
  dateStart: CardNative["dateStart"];
  isComplete: CardNative["isComplete"];
}


const Dates = ({dateDue, dateStart, isComplete}: Props) => {
  let theme: string;
  let dates: string;

  if (dateStart !== null && dateDue !== null) {
    dates = `${getShorterDateStringOf(new Date(dateStart))} - ${getShorterDateStringOf(new Date(dateDue))}`;
  } else if (dateStart !== null) {
    dates = `${is24HoursOrLessBeforeNow(dateStart) ? "started" : "starts"}: ${getShorterDateStringOf(new Date(dateStart))}`;   
  } else if (dateDue !== null) {
    dates = getShorterDateStringOf(new Date(dateDue));
  } else {
    return null;
  }

  switch (getStatus({dateDue, dateStart, isComplete})) {
    case Status.OVERDUE: theme = badge.red; break;
    case Status.DUESOON: theme = badge.yellow; break;
    case Status.COMPLETE: theme = badge.lime; break;
    /** Execution should not reach here */
    default: theme = "";
  }


  return dates? (
    <span 
      children={dates}
      className={classNames(s.dates, theme)}
    />
  ) : (
    null
  );
};


export default Dates;