import {State} from "./index";
import {useSelector as plainUseSelector} from "react-redux"


export type UseSelector = <TSelected = unknown>(

  selector: (
    state: State
  ) => TSelected,

  equalityFn?: (
    left: TSelected, 
    right: TSelected,
  ) => boolean,

) => TSelected


export const useSelector = plainUseSelector as UseSelector;


export default useSelector;