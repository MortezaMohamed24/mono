import fetch from "../fetch";
import {ApplyPatches} from "/features/global";
import generateUndoerPatches from "/util/redux/generateUndoerPatches";


function ApiMutator({
  format: formatResponseBody, 
  prepare: prepareRequestMeta,
  request: createRequest, 
  pending: PendingAction, 
  rejected: RejectedAction, 
  fulfilled: FulfilledAction, 
}) {
  function thunk(unpreparedMeta) {
    return async (dispatch, getState) => {
      const stateBeforeUptimisticUpdates = getState();
      dispatch(PendingAction(meta));
      const stateAfterUptimisticUpdates = getState();

      try {
        const meta = prepare ? prepareRequestMeta(unpreparedMeta) : unpreparedMeta;
        const request = createRequest(meta);
        const body = await fetch({request, formatResponseBody});

        dispatch(FulfilledAction(meta, body));  

        return body;
      } 
      
      catch (e) {
        const undoers = generateUndoerPatches(
          stateBeforeUptimisticUpdates, 
          stateAfterUptimisticUpdates,
        );

        dispatch(RejectedAction(meta, e));
        dispatch(ApplyPatches(undoers));

        throw e;
      }
    }
  }


  thunk.pending = PendingAction;
  thunk.rejected = RejectedAction;
  thunk.fulfilled = FulfilledAction;


  return thunk;
}


export default ApiMutator;