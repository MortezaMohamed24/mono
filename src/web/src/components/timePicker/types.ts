export type PopupName = "Minutes" | "Suffix" | "Hours"

export type TimeSuffix = "AM" | "PM"

export interface Props {
  meta?: Meta | undefined;
  initial?: number | Date | {hours: number, minutes: number} | undefined;
}

export interface Meta {
  value?: Date;
}