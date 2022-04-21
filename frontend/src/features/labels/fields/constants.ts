import {NAMES} from "/labels/constants/colors";


/** 
 * A RegExp source matching a label color name
*/
export const COLOR = `^(${NAMES.join("|")})$`;
/** 
 * A label's minimum valid length
*/
export const MIN_NAME_LENGTH = 1;
/** 
 * A label's maximum valid length
*/
export const MAX_NAME_LENGTH = 30;


export default Object.freeze({
  COLOR,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
});