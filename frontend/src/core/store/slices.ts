import { dispatch } from ".";
import {ReadonlyState} from "./state";


type State = ReadonlyState
type AnySlice = State[AnyStateKey]
type AnyStateKey = keyof State
type AnySliceName = keyof State


type SliceInitiator<Name extends AnySliceName> = () => State[Name]
type SliceInitiators = [AnySliceName, SliceInitiator<AnySliceName>][]


const initiators: SliceInitiators = [];


const useSlice = <Name extends AnySliceName>(name: Name, initiator: () => State[Name]) => {
  initiators.push([name, initiator]);
  console.log([name]);
  dispatch({type: "jhgjhgjhg"} as any)
};

const initialize = (uninitializedState: Partial<ReadonlyState> = {}) => {
  const initializedState: any = {};
  
  for (let [key, initiator] of initiators) {
    if (uninitializedState[key] === undefined) {
      initializedState[key] = initiator();
    } else {
      initializedState[key] = uninitializedState[key];
    }
  }
  
  return initializedState as ReadonlyState;
};


export {
  AnySlice,
  AnyStateKey,
  AnySliceName,
  useSlice,
  initialize,
};

export default Object.freeze({
  useSlice,
  initialize,
});