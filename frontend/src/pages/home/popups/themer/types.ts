import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The id of the board whose theme is to change */
      idBoard: string;
    }
  }
}