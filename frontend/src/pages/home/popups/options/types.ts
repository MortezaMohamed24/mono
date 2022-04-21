import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The id of the board to display options for */
      idBoard: string;
    }
  }
}