import {v4} from "uuid";
import {useState} from "react";


/** 
 * a safe id is an id starting with a letter
*/
function useSafeID() {
  return useState(createSafeID)[0];
}


function createSafeID() {
  return "a-" + v4();
}


export {useSafeID};
export default useSafeID;