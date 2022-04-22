import {init} from "./initReduxStateAction";
import {dispatch} from ".";
import {ReadonlyState} from "./state";


type State = ReadonlyState
type AnySlice = State[AnyStateKey]
type AnyStateKey = keyof State
type AnySliceName = keyof State


type SliceInitializer<Name extends AnySliceName> = () => State[Name]
type SliceInitailizers = [AnySliceName, SliceInitializer<AnySliceName>][]


const initiators: SliceInitailizers = [];


const useSlice = <Name extends AnySliceName>(name: Name, initializer: () => State[Name]) => {
  initiators.push([name, initializer]);

  // dispatch this event to allow `initator` to initialize the new slice
  dispatch(init());
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