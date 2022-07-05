import mutate from "./mutate";
import {ApplyPatches} from "/features/global";
import generateUndoerPatches from "/util/redux/generateUndoerPatches";


function ApiMutator({format, pending, request, prepare, rejected, fulfilled}) {


  return function Thunk(unpreparedMeta) {
    const meta = prepare ? prepare(unpreparedMeta) : unpreparedMeta;


    async function ThunkTummy(dispatch, getState) {
      const stateBeforeUptimisticUpdates = getState();
      dispatch(pending(meta));
      const stateAfterUptimisticUpdates = getState();

      try {
        const body = await mutate(request(meta), format);
        dispatch(fulfilled(meta, body));  
        return body;
      } 
      
      catch (e) {
        const undoers = generateUndoerPatches(
          stateBeforeUptimisticUpdates, 
          stateAfterUptimisticUpdates,
        );

        dispatch(rejected(meta, e));
        dispatch(ApplyPatches(undoers));

        throw e;
      }
    }


    return ThunkTummy;
  }


}


export default ApiMutator;