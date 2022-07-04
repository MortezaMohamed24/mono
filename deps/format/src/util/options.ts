import {ClassName} from "../type.js"


export interface Options {
  /**
   * Defaults to "UnknownType".
  */
 name?: undefined | string 
 error?: undefined | string
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
}


export default Options