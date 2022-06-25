/** 
 * Options for the `authenticator.authenticate()` middleware factory.
*/
export interface Options {
  /** 
   * Names of the methods to use to authenticate the user
  */
  methods: string[]
}