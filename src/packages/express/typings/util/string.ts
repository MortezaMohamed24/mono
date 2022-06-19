/** 
 * Removes the tail of a string.
*/
export type RemoveTail<TString extends string, TTail extends string> = (
  TString extends `${infer P}${TTail}` 
    ? P 
    : TString
)