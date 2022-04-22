declare global {
  export interface __INTERNAL_REDUX_ACTIONS__ {

  }
}


export type Actions = __INTERNAL_REDUX_ACTIONS__
export type AnyAction = Actions[AnyActionKey]
export type AnyActionKey = keyof Actions
export type AnyActionType = keyof Actions