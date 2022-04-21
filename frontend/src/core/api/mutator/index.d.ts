import fetch from "../fetch";
import {Dispatch} from "/core/store";
import {GetState} from "/core/store";
import {AnyAction} from "/core/store";
import {ApplyPatches} from "/features/global";
import generateUndoerPatches from "/util/redux/generateUndoerPatches";


type Thunk<
  RequestMeta extends unknown,
  ResponseBody extends unknown,
  PendingAction extends AnyAction,
  RejectedAction extends AnyAction,
  FulfilledAction extends AnyAction,
  UnpreparedRequestMeta extends unknown = RequestMeta,
> = {
  (meta: UnpreparedRequestMeta): (
    dispatch: Dispatch, 
    getState: GetState,
  ) => Promise<ResponseBody>;
  
  pending: PendingAction;
  rejected: RejectedAction;
  fulfilled: FulfilledAction;
}

type Options<
  RequestMeta extends unknown,
  ResponseBody extends unknown,
  PendingAction extends AnyAction,
  RejectedAction extends AnyAction,
  FulfilledAction extends AnyAction,
  UnpreparedRequestMeta extends unknown = RequestMeta,
> = (
  UnpreparedRequestMeta extends RequestMeta 
    ? ({
        prepare?: undefined;
        request: (meta: RequestMeta) => Request;
        pending: (meta: RequestMeta) => PendingAction;
        rejected: (meta: RequestMeta, error: unknown) => RejectedAction;
        fulfilled: (meta: RequestMeta, body: ResponseBody) => FulfilledAction;
      })
    : ({
        prepare: (meta: UnpreparedRequestMeta) => RequestMeta; 
        request: (meta: RequestMeta) => Request;
        pending: (meta: RequestMeta) => PendingAction;
        rejected: (meta: RequestMeta, error: unknown) => RejectedAction;
        fulfilled: (meta: RequestMeta, body: ResponseBody) => FulfilledAction;
      })
) & (
  ResponseBody extends undefined 
    ? {format?: undefined}
    : {format: (body: unknown) => ResponseBody}
)

function ApiMutator<
  RequestMeta extends unknown,
  ResponseBody extends unknown,
  PendingAction extends AnyAction,
  RejectedAction extends AnyAction,
  FulfilledAction extends AnyAction,
  UnpreparedRequestMeta extends unknown = RequestMeta,
>(options: Options<
  RequestMeta, 
  ResponseBody, 
  PendingAction, 
  RejectedAction, 
  FulfilledAction,
  UnpreparedRequestMeta
>): Thunk<
  RequestMeta,
  ResponseBody,
  PendingAction,
  RejectedAction,
  FulfilledAction,
  UnpreparedRequestMeta,
>


export default ApiMutator;