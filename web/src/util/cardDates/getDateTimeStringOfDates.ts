import getShortTimeStringOf from "./getShortTimeStringOf";
import getShortDateStringOf from "./getShortDateStringOf";
import getShorterDateStringOf from "./getShorterDateStringOf";


function getDateTimeStringOfDates({dateDue, dateStart}: {dateDue: number | null, dateStart: number | null}) {
  const due = dateDue === null ? null : new Date(dateDue);
  const start = dateStart === null ? null : new Date(dateStart);

  if (start !== null && due !== null) {
    return `${getShorterDateStringOf(start)} - ${getShorterDateStringOf(due)} at ${getShortTimeStringOf(due)}`;
  } else if (start !== null) {
    return getShortDateStringOf(start);
  } else if (due !== null) {
    return `${getShortDateStringOf(due)} at ${getShortTimeStringOf(due)}`;
  }

  throw new TypeError("Expected at least either 'dateDue` or 'dateStart' to be non-null")
}


export default getDateTimeStringOfDates;