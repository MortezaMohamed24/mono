import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The id of the card whose labels are to edit */
      idCard: string;
    }
  }
}