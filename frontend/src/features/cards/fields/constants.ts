/** 
 * `Sun Oct 22 2000`: Minimum valid card date (whether start or due)
*/
export const MIN_DATE = 972197531960;
/** 
 * `Fri Oct 22 2500`: Maximum valid card date (whether start or due)
*/
export const MAX_DATE = 16750651931960;
/** 
 * A card's title minimum length
*/
export const MIN_TITLE_LENGTH = 1;
/** 
 * A card's title maximum length
*/
export const MAX_TITLE_LENGTH = 300;
/** 
 * A card's description minimum length
*/
export const MIN_DESCRIPTION_LENGTH = 1;
/** 
 * A card's description maximum length
*/
export const MAX_DESCRIPTION_LENGTH = 10000;


export default Object.freeze({
  MIN_DATE,
  MAX_DATE,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
});