import Type from "../type/index.js";
import {Oid} from "#util/oid";
import {OID_PATTERN} from "#util/oid";


interface Config {
  value: string;
  return: Oid;
  options: {};
}

const OID = Type<Config>({
  typeNames: ["String"], 
  checker: (v, INVALID) => {
    return OID_PATTERN.test(v) ? new Oid(v) : INVALID;
  },
});


export default OID;