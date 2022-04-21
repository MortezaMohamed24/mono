import {AnyID} from "../namespace";
import {createContext} from "react";

/**
 * This context is provided by The `popupify` HOC and 
 * consumed by the `<Toggler />` component
*/
export type Context = {
  /** id of the nearest enclosing `<Module />` */
  id: AnyID;
}

/**
 * This context is provided by The `popupify` HOC and 
 * consumed by the `<Toggler />` component
*/
export const Context = createContext<Context | null>(null);


export default Context;