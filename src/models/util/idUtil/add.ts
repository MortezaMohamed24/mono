import {Oid} from "#util/oid";
import addOne from "./addOne.js";
import addMany from "./addMany.js";


function add(target: Oid[], source: Oid | Oid[], index: number = Infinity) {
  Array.isArray(source) ? addMany(target, source, index) : addOne(target, source, index);
}


export default add;