declare global {
  /** 
   * Popups should use interface merging to modifiy this interface
   * in order to specify their respective payloads' types.
   * 
   * This interface's keys must be `string`, and its values must be 
   * `{payload: unknown}`. 
   * 
   * `WindowHistortManager` needs to know the exact keys of this interface,
   * for this, we cannot just write `{[key: string]: {payload: unknown}}` to 
   * robustly constain what fields can go into this interface.
   */
  interface Components_Popups_Payloads {
    "*": unknown;
  }
  
  type Components_Popups_AnyID = keyof Components_Popups_Payloads;
}

export type AnyID = Components_Popups_AnyID;
export type Payloads = Components_Popups_Payloads;