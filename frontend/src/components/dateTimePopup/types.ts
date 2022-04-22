import {ID} from "./constants";
import {Component} from "/components/calendar";
import {TimePicker} from "/components/timePicker";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /**
       * Will be invoked, passed the current date-time value, 
       * when the user clicks the save button
       */
      save(value: Date): void;
      /**
       * A value that'll be used as the initial date for <Calendar />
       */
      initialDate: Parameters<typeof Component>["0"]["initial"];
      /**
       * A value that'll be used as the initial time for <TimePicker />
       */
      initialTime: Parameters<typeof TimePicker>["0"]["initial"];
    }
  }
}