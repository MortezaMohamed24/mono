import {ID} from "./constants";
import {Option} from "./state";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The id of the `<Selector />` component this popup is opened for */
      id: unknown;
      options: Option[];
      caption?: string;
      noOpionsMessage?: string;
    }
  }
}