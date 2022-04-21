import {OID} from "/util/checker";
import {title} from "/lists/fields";
import {ARRAY} from "/util/checker";
import {OBJECT} from "/util/checker";
import {ListBase} from "./base";
import {WithError} from "/util/checker";
import {isWatched} from "/lists/fields";
import {sortMethod} from "/lists/fields";


/** 
 * A list as stored in the state
*/
export type ListNative = Pick<ListBase, 
  | "id" 
  | "title" 
  | "idUser"
  | "idBoard" 
  | "idCards" 
  | "isWatched" 
  | "sortMethod"
>


export const formatAsListNative = OBJECT<ListNative>({
  id: OID(),
  title: title,
  idUser: OID(),
  idCards: ARRAY([OID()]),
  idBoard: OID(),
  isWatched: isWatched,
  sortMethod: sortMethod,
});


export const formatAsListNativeStrictly = WithError(formatAsListNative, () => (
  new TypeError("invalid native card")
));


export default Object.freeze({
  format: formatAsListNative,
  formatStrictly: formatAsListNativeStrictly,
});