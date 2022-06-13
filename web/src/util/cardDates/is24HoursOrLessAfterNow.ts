import {D} from "./constants"; 


function is24HoursOrLessAfterNow(timeStamp: number) {
  const now = Date.now();
  const _24HoursLater = now + D;
  return timeStamp > now && timeStamp <= _24HoursLater;
}


export default is24HoursOrLessAfterNow;