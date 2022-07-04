import {createDraft, finishDraft, Draft} from "immer";


type Reducer<
  State extends BaseState,
  Action extends BaseAction,
> = (state: Draft<State>, action: Action) => void

type BaseState = Readonly<object>

type BaseAction<
  Type extends string = string,
> = Readonly<{
  type: Type; 
  meta?: unknown;
  error?: unknown;
  payload?: unknown; 
}>;

type BaseMapOfActions<
  Type extends string = string,
> = Readonly<{
  [key in Type]: BaseAction<Type>;
}>

type BaseMapOfReducers<
  State extends BaseState,
  Actions extends BaseMapOfActions,
> = Readonly<{
  [Key in keyof Actions]?: Reducer<State, Actions[Key]>[];
}>


const combineReducers = <
  State extends BaseState, 
  Actions extends BaseMapOfActions,
>(reducers: BaseMapOfReducers<State, Actions>) => {
  
  const map = new Map(Object.entries(reducers));

  const reducer = (state: State, action: Actions[keyof Actions]) => {
    const draft = createDraft(state);

    for (let [type, reducers] of map) {
      if (type === action.type) {
        for (let reducer of reducers) {
          reducer(draft, action);
        }
      }
    }

    return finishDraft(draft);
  }


  return reducer;
};


export default combineReducers;