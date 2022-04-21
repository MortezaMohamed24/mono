import {Day} from "./types";


let now = new Date();
let year = now.getFullYear();
let date = now.getDate();
let month = now.getMonth();


function update() {
  now = new Date();
  year = now.getFullYear();
  date = now.getDate();
  month = now.getMonth();
}

setInterval(update, 100 * 60 /* Every minute */);


/**
 * Checkes wether `day` is today
 */
export default (day: Day) => day.year === year && day.month === month && day.date === date;