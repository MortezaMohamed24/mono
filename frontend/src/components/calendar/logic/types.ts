/** The calendar state */
export interface State {
  /** The previuose month */
  readonly prev: Month;
  /** The current month */
  readonly curr: Month;
  /** The next month */
  readonly next: Month;
  /** The current month's weeks */
  readonly weeks: Day[][];
  /** Navigates to the next month */
  readonly forward: () => void;
  /** Navigates to the previuse month */
  readonly backward: () => void;
}

/** A calendar page */
export interface Page {
  /** The previuose month */
  readonly prev: Month;
  /** The current month */
  readonly curr: Month;
  /** The next month */
  readonly next: Month;
  /** The current month's weeks */
  readonly weeks: Day[][];
}

/** A month */
export interface Month {
  /** The week day when this month starts */
  readonly day: 1 | 2 | 3 | 4 | 5 | 6 | 7; 
  /** This month's name */
  readonly name: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
  /** Positive finite number. The year when this month is */
  readonly year: number;
  /** The millisecond time stamp indicating the exact ponit in time when this month starts */
  readonly time: number;
  /** The Days of this month */
  readonly days: readonly Day[];
  /** Which month this is */
  readonly number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** How many days this month consists of */
  readonly length: 28 | 29 | 30 | 31;
}

/** A calendar page square */
export interface Day {
  /** a unique string distinguishing this day from other days */
  readonly id: string;
  /** a number from `1` through `31` specifing when, in `this.month`, this day is */
  readonly date: number;
  /** the year when this day is */
  readonly year: number;
  /** a number from `0` through `11` specifing in which month this day is */
  readonly month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}