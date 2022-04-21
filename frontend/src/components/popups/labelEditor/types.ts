import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    /** The id of the label to edit */
    [ID]: string;
  }
}