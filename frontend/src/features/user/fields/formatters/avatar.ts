import {Or} from "/util/checker";
import {NULL} from "/util/checker";
import {STRING} from "/util/checker";


const avatar = Or([
  NULL(), 
  STRING({}),
]);


export default avatar;