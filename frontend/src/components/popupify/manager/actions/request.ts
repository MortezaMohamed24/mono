import {AnyID} from "../namespace";
import {Payloads} from "../namespace";


export interface Request<ID extends AnyID> {
  id: ID;
  zIndex?: number | undefined;
  payload: Payloads[ID]; 
  toggler: string;
  reference: string;
}


export default Request;