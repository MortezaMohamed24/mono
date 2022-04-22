import {Dispatch} from "/store";
import {GetState} from "/store";
import {AnyAction} from "/store";


type Thunk<
  RequestMeta extends unknown = undefined,
  ResponseBody extends unknown = undefined,
  PendingAction extends AnyAction = AnyAction,
  RejectedAction extends AnyAction = AnyAction,
  FulfilledAction extends AnyAction = AnyAction,
  UnpreparedRequestMeta extends unknown = undefined,
> = (
  meta: RequestMeta
) => (
  dispatch: Dispatch, 
  getState: GetState,
) => (
  Promise<ResponseBody>
)

type Options<
  RequestMeta extends unknown = undefined,
  ResponseBody extends unknown = undefined,
  PendingAction extends AnyAction = AnyAction,
  RejectedAction extends AnyAction = AnyAction,
  FulfilledAction extends AnyAction = AnyAction,
  UnpreparedRequestMeta extends unknown = undefined,
> = 
  & ({
      request(meta: RequestMeta): Request;
      pending(meta: RequestMeta): PendingAction;
      rejected(meta: RequestMeta, error: unknown): RejectedAction;
      fulfilled(meta: RequestMeta, body: ResponseBody): FulfilledAction;
    })
  & (
      ResponseBody extends undefined
        ? {format?: undefined}
        : {format(unformattedResponseBody: unknown): ResponseBody}
    )
  & (
      UnpreparedRequestMeta extends undefined
        ? {prepare?: undefined}
        : {prepare(unpreparedRequestMeta: UnpreparedRequestMeta): RequestMeta}
    )

declare function ApiMutator<
  RequestMeta extends unknown = undefined,
  ResponseBody extends unknown = undefined,
  PendingAction extends AnyAction = AnyAction,
  RejectedAction extends AnyAction = AnyAction,
  FulfilledAction extends AnyAction = AnyAction,
  UnpreparedRequestMeta extends unknown = undefined,
>(options: Options<
    RequestMeta, 
    ResponseBody, 
    PendingAction, 
    RejectedAction, 
    FulfilledAction, 
    UnpreparedRequestMeta,
  >
): (
  Thunk<
    RequestMeta, 
    ResponseBody, 
    PendingAction, 
    RejectedAction, 
    FulfilledAction, 
    UnpreparedRequestMeta,
    >
)


export default ApiMutator;