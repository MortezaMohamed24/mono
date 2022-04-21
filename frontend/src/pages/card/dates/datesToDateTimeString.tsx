import React from "react";
import {getDateTimeStringOfDates} from "/util/cardDates";


interface Props {
  dateDue: number | null;
  dateStart: number | null;
}

const DatesToDateTimeString = ({dateDue, dateStart}: Props) => (
  <span>
    {getDateTimeStringOfDates({dateDue, dateStart})}
  </span>
);


export default React.memo(DatesToDateTimeString);