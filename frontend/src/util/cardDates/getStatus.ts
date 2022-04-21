import {D} from "./constants";


enum Status {
  DUESOON = "duesoon",
  OVERDUE = "overdue",
  COMPLETE = "complete",
}

interface Argument {
  dateDue: number | null;
  dateStart: number | null;
  isComplete: boolean;
}


function getStatus({dateDue, dateStart, isComplete}: Argument) {
  if (isComplete) {
    return "complete";
  } else if (dateDue === null) {
    return null;
  }

  const now = Date.now();

  if (dateDue <= now || (dateStart !== null && dateDue <= dateStart)) {
    return "overdue";
  } else if (dateDue - D <= now || ((dateStart !== null) && (dateDue - D <= dateStart))) {
    return "duesoon";
  }
}


export default getStatus;
export {Status, getStatus};