import History from "./history";


declare global {
  interface Components_Popups_Payloads {
    "*": unknown;
  }
}

export type ID = keyof Components_Popups_Payloads;
export type Payload = Components_Popups_Payloads[ID];
export type Payloads = Components_Popups_Payloads;

export type Entry<TID extends ID = ID> = {
  id: TID;
  isOpen: boolean;
  zIndex: number | undefined;
  payload: Payloads[TID]; 
  reference: string;
  backwardable: boolean;
}

export type State = {
  history: History;
}