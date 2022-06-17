export interface Props {
  meta?: Meta | undefined;
  /** The preselected day in milliseconds. Defaults to `Date.now()` */
  initial?: number | undefined;
}

export type Meta = {
  /** the current value of the calendar */
  value?: Date | null;
  /** jumps to the next page of the calendar */
  forward?(): void;
  /** jumps to the previouse page of the calendar */
  backward?(): void;
}