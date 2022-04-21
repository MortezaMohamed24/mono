import {D} from "./constants";


function is24HoursOrLessBeforeNow(timeStamp: number) {
  const now = Date.now();
  const _24HoursAgo = now - D;
  return timeStamp < now && timeStamp >= _24HoursAgo;
}


export default is24HoursOrLessBeforeNow;