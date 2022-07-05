import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The is of the source card (the one to create a copy of) */
      idCard: string;
    }
  }
}