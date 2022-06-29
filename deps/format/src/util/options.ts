import {ClassName} from "../type.js"


export interface Options {
  /**
   * Defaults to "UnknownType".
  */
  name?: undefined | string 
  /**
   * Defaults to false.
  */
  strict?: undefined | boolean
  /**
   * Defaults to false.
  */
  boolean?: undefined | boolean 
  /**
   * Defaults to [ANY].
  */
  classes?: undefined | ClassName[] 
  /**
   * Defaults to undefined.
  */
  fallback?: undefined | unknown
  /**
   * Defaults to false.
  */
  optional?: undefined | boolean
  /**
   * Defaults to true.
  */
  checkClass?: undefined | boolean
  violation?: undefined | string
}


export default Options