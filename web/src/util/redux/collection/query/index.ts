import MATCHES from "./matches";
import {Querify, Queryable} from "./types";


function matches<Value extends Queryable>(value: Value, query: Querify<Value>) {
  return MATCHES(value, query); 
}


export default matches;