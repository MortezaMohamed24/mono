/**
 * A RegExp matching a label field key.
*/
export const KEY = /^(|id|name|color|idUser|idBoard)$/u;
/**
 * A pattern matching a label name.
*/
export const NAME = /^[\w -]$/u;
/**
 * A RegExp matching a label color.
 */
export const COLOR = /^(blue|indigo|dark|sky|purple|pink|red|orange|cyan|lime|green|yellow)$/u;
/**
 * All valid label colors.
*/
export const COLORS = Object.freeze([
  "blue", 
  "indigo", 
  "dark", 
  "sky", 
  "purple", 
  "pink", 
  "red", 
  "orange", 
  "cyan", 
  "lime", 
  "green", 
  "yellow",
] as const);
/**
 * Minimum valid label name length.
*/
export const MIN_NAME_LENGTH = 1;
/**
 * Maximum valid label name length.
*/
export const MAX_NAME_LENGTH = 30;

export default Object.freeze({
  KEY,
  NAME, 
  COLOR, 
  COLORS, 
  MIN_NAME_LENGTH, 
  MAX_NAME_LENGTH, 
});