import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** the id of the checklis tto display options for */
      idChecklist: string;
    }
  }
}