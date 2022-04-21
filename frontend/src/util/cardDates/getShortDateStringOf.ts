import is from "./is";
import getShortMonthName from "./getShortMonthName";


function getShortDateStringOf(dateObj: Date) {
  let str = "";

  const tomorrow = new Date();
  const today = new Date();
  const yesterday = new Date();

  yesterday.setDate(yesterday.getDate() - 1);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  if (is(dateObj, yesterday)) {
    str += "Yesterday";
  } else if (is(dateObj, today)) {
    str += "Today";
  } else if (is(dateObj, tomorrow)) {
    str += "Tomorrow";
  } else {
    str += `${getShortMonthName(dateObj.getMonth())} ${dateObj.getDate()}`;
  }
  
  if (dateObj.getFullYear() !== today.getFullYear()) {
    str += `, ${dateObj.getFullYear()}`;
  }

  return str;
}


export default getShortDateStringOf;