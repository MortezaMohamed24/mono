import {ID} from "./state";
import {useContext} from "react";
import {createContext} from "react";


/** This context is `<Context.Provide />` by every popup. */
export type PopupContext = {
  /** The id of the providing popup */
  readonly id: ID;
}

export const PopupContext = createContext<PopupContext | null>(null);

export const usePopupContext = () => (
  useContext(PopupContext)
);