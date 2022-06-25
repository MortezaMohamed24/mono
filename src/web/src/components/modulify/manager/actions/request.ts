import {AnyID} from "../namespace";
import {Payloads} from "../namespace";


export type Request<ID extends AnyID> = 
  & ({
    id: ID;
    zIndex?: number | undefined;
    toggler?: string | undefined;
  })
  & (
    Payloads[ID] extends null | undefined 
      ? {payload?: Payloads[ID]} 
      : {payload: Payloads[ID]} 
  )


export default Request;