import {ID} from "./constants";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      head: string;
      body: string;
      btnAColor: "red" | "gray" | "blue";
      btnBColor: "red" | "gray" | "blue";
      btnAContent: string;
      btnBContent: string;
      onBtnBClicked?: (() => void) | undefined;
      onBtnAClicked?: (() => void) | undefined;
    }
  }
}