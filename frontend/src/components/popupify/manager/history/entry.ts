import {AnyID} from "../namespace";
import {Payloads} from "../namespace";


export type Entry<ID extends AnyID> = {
  id: ID;
  zIndex: number | undefined;
  payload: Payloads[ID]; 
  toggler: string;
  reference: string;
  backwardable: boolean;
}


export type AnyEntry = Entry<AnyID>  