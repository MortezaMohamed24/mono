import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** A string to use as this popup's title */
      title: string;
      /** A string to be used as this popup's body. it should explain what is to be deleted. */
      body: string;
      /** A function that will be invoked if the user agrees on performing the deletion */
      commit(): void;
    }
  }
}