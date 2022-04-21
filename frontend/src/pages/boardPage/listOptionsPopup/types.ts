import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** the id of the list to display options for */
      idList: string;
    }
  }
}