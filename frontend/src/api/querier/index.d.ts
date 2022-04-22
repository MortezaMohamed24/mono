import {Dispatch} from "/store";
import {GetState} from "/store";
import {AnyAction} from "/store";


type Thunk<
  RequestMeta extends unknown,
  ResponseBody extends unknown,
  PendingAction extends AnyAction,
  RejectedAction extends AnyAction,
  FulfilledAction extends AnyAction,
> = {
  (meta: RequestMeta): (
    dispatch: Dispatch,
    getState: GetState,
  ) => (
    Promise<ResponseBody>
  );
  
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
> = {
  request(meta: RequestMeta): Request;
  pending(meta: RequestMeta): PendingAction;
  rejected(meta: RequestMeta, error: unknown): RejectedAction;
  fulfilled(meta: RequestMeta, body: ResponseBody): FulfilledAction;
} & (
  undefined extends ResponseBody 
    ? {format?: undefined}
    : {format: (body: unknown) => ResponseBody}
)

function ApiQuerier<
  RequestMeta extends unknown,
  ResponseBody extends unknown,
  PendingAction extends AnyAction,
  RejectedAction extends AnyAction,
  FulfilledAction extends AnyAction,
>(options: Options<
  RequestMeta,
  ResponseBody,
  PendingAction,
  RejectedAction,
  FulfilledAction
>): Thunk<
  RequestMeta,
  ResponseBody,
  PendingAction,
  RejectedAction,
  FulfilledAction
>


export default ApiQuerier;