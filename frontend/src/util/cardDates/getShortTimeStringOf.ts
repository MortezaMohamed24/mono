/**
 * format examples: 
 * - `02:40 AM`
 * - `10:00 PM`
 * - `00:00 AM`
 */
function getShortTimeStringOf(dateObj: Date) {
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let postfix = "AM";

  if (hours > 12) {
    hours = hours - 12;
    postfix = "PM";
  }

  return `${hours}:${minutes} ${postfix}`;
}


export default getShortTimeStringOf;