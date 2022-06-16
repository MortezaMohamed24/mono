import getShortMonthName from "./getShortMonthName";


/** 
 * format examples: 
 * - `Jan 17` 
 * - `Jan 17, 2020` 
*/
function getShorterDateStringOf(dateObj: Date) {
  const currYear = new Date().getFullYear();

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();

  return `${getShortMonthName(month)} ${date}${year !== currYear ? `, ${year}` : ""}`;
}


export default getShorterDateStringOf;