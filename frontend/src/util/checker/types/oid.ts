import Type from "../type";
import {OID as OID_PATTERN} from "/util/id";


const OID = Type<string, undefined, string>({
  checker: (v, INVALID) => OID_PATTERN.test(v) ? v : INVALID,
  typeName: ["String"], 
});


export default OID;