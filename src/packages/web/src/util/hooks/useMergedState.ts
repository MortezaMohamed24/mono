import {produce} from "immer";
import {useState} from "react";


function useMergedState<T>(initial: T | (() => T)): [T, (newState: Partial<T>) => void] {
  const [state, setState] = useState(initial);


  const setStateWrapper = (newState: Partial<T>) => {
    setState(
      produce(
        state, 
        () => ({
          ...state, 
          ...newState,
        })
      )
    )
  };


  return [state, setStateWrapper];
};


export default useMergedState;