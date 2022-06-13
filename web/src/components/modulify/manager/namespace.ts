declare global {
  /** 
   * Modules should use interface merging to modifiy this interface
   * in order to specify their respective payloads' types.
   * 
   * This interface's keys must be `string`, and its values must be 
   * `{payload: unknown}`. 
   * 
   * `WindowHistortManager` needs to know the exact keys of this interface,
   * for this, we cannot just write `{[key: string]: {payload: unknown}}` to 
   * robustly constain what fields can go into this interface.
   */
  export interface Components_Modules_Payloads {
    "*": unknown
  } 
}

export type AnyID = keyof Payloads extends never ? "*" : keyof Payloads;
export type Payloads = Components_Modules_Payloads;