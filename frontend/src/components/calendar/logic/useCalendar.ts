import {v4} from "uuid";
import {Day} from "./types";
import {Page} from "./types";
import {State} from "./types";
import {Month} from "./types";
import {useState} from "react";


/** 
 * @param {Number}
 * A finite positive number representing the pre selected month
 */
const useCalendar = (monthTimeStamp: number): State => {
  const [page, setPage] = useState<Page>(() => Page(monthTimeStamp));

  return {
    prev: page.prev,
    curr: page.curr,
    next: page.next,
    weeks: page.weeks,
    forward: () => forward(page, setPage), 
    backward: () => backward(page, setPage), 
  };
};


/**
 * Creates calendar pages. The created page represents the month specified
 * by `monthTimeStamp`. The created page also shows some last days of the 
 * previous month and some first days of the next month.
 */
const Page = (monthTimeStamp: number): Page => {
  const date = new Date(monthTimeStamp);
  const year = date.getFullYear();
  const month = date.getMonth();

  const prev = Month(year, month - 1);
  const curr = Month(year, month);
  const next = Month(year, month + 1);
  
  return {
    prev: prev,
    curr: curr,
    next: next,
    weeks: Weeks({prev, curr, next}), 
  };
};


/**
 * Takes a `state` representing a month and invokes `setState` 
 * with a new one representing the next month of that month.
 */
const forward = (page: Page, setPage: (newPage: Page) => void) => {
  const prev = page.curr;
  const curr = page.next;
  const next = Month(page.next.year, page.next.number + 1);

  setPage({
    prev,
    curr,
    next,
    weeks: Weeks({prev, curr, next}), 
  });
};
/**
 * Takes a `state` representing a month and invokes `setState` 
 * with a new one representing the previous month of that month.
 */
const backward = (page: Page, setPage: (newPage: Page) => void) => {
  const prev = Month(page.prev.year, page.prev.number - 1);
  const curr = page.prev;
  const next = page.curr;

  setPage({
    prev,
    curr,
    next,
    weeks: Weeks({prev, curr, next}),  
  });
};


/**
 * Creats an object descrping the month specified by `year` and `month`
 * 
 * @param {Number} possiblyFlowedYear A positive number assignable to `new Date()` as a year
 * @param {Number} possiblyFlowedMonth A positive number representing the month
 * 
 */
const Month = (possiblyFlowedYear: number, possiblyFlowedMonth: number): Month => {
  const date = new Date(possiblyFlowedYear, possiblyFlowedMonth);


  const year   = date.getFullYear();
  const number = date.getMonth() as Month["number"];
  const day    = date.getDay() as Month["day"]; 
  const name   = getMonthName(number);
  const length = getMonthLength(year, name);
  const time   = date.getTime();
  const days   = getDaysOfMonth({year, number, length});


  return {year, number, day, name, length, time, days};
};
/**
 * @param {Number} number 0 throgh 11
 * @returns the capitalized long name of the month specifed by `number`
 */
const getMonthName = (number: Month["number"]): Month["name"] => {
  switch (number) {
    case 0: return "January";
    case 1: return "February";
    case 2: return "March";
    case 3: return "April";
    case 4: return "May";
    case 5: return "June";
    case 6: return "July";
    case 7: return "August";
    case 8: return "September";
    case 9: return "October";
    case 10: return "November";
    case 11: return "December";
  };
};
/**
 * @param {Number} year positive number
 * @param {String} monthName a month name as reutrned by `getMonthName()`
 * @reurns how many days the month specified by `year` and `name` has
 */
const getMonthLength = (year: number, monthName: Month["name"]): Month["length"] => {
  switch (monthName) {
    case "January": return 31;
    case "February": return year % 4 === 0 ? 29 : 28;
    case "March": return 31;
    case "April": return 30;
    case "May": return 31;
    case "June": return 30;
    case "July": return 31;
    case "August": return 31;
    case "September": return 30;
    case "October": return 31;
    case "November": return 30;
    case "December": return 31;
  };
};
/**
 * Creates an array of objects representing the days of the month 
 * specified by `year`, `number`, and `length` 
 */
const getDaysOfMonth = ({year, number, length}: Pick<Month, "year" | "number" | "length">): Month["days"] => {
  const days: Day[] = [];

  // Loop as many times as the month's days' count.
  // Reminder: Dates are from 1 through 31. and this is why the loop starts from 1
  for (let i = 1; i <= length; i++) {
    days.push({ 
      id: v4(), 
      year: year, 
      date: i,
      month: number, 
    });
  }

  return days;
};


/**
 * Converts `months` into a 2D array representing a calendar page's squares
 */
const Weeks = (months: {prev: Month, curr: Month, next: Month}): Day[][] => {
  return intoWeeks(intoDays(months));
};

const intoDays = ({prev, curr, next}: {prev: Month, curr: Month, next: Month}): Day[] => {
  /**
   * A calendar page is 7-square width and 6-square height. 
   * Which is a total of 35 squares.
   * 
   * A calendar page is meant to display a single month. But
   * it also displays some last days of the previuose month 
   * and some first days from the next month.
   * 
   * The current month's first day is placed in the column represending
   * the week day when the month starts. If the current month starts 
   * on Tusday, then it'll be arranged the following way in the page:
   * 
   * ------------------------------------
   * |    |    | 1  | 2  | 3  | 4  | 5  |
   * | 6  | 7  | 8  | 9  | 10 | 11 | 12 |
   * | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
   * | 19 | 20 | 21 | 22 | 32 | 24 | 25 |
   * | 26 | 27 | 28 | 29 |    |    |    |
   * ------------------------------------
   * 
   * where the blank squars in the first row should be filled the previuse
   * month's last two days, and the blank squares at the last row should be
   * filled with the next month's first three days.
  */

  /** Calendar page squares (days) count */
  const total = 35;
  /** Clanedar page days */
  const days: Day[] = [];


  /** add some last days of `prev` */
  if (curr.day > 0) {
    days.push(...prev.days.slice(-curr.day));
  }
  
  /** add all `curr`'s days */
  days.push(...curr.days);

  /** fill thte remaining squares with some first days of `next` */
  days.push(...next.days.slice(0, total - days.length));


  return days;
};
/**
 * Takes a 35-element array of days and converts it 
 * to a 5-element array where each element is a 7-element 
 * array of days.
 */
const intoWeeks = (days: Day[]): Day[][] => {
  const weeks = [];
  const length = days.length;

  for (let i = 0; i < length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};


export default useCalendar;