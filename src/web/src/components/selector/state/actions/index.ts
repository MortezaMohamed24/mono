import "./init";
import {ID, Option, Query} from "../types";


// ---------- ACTION TYPES

export const EDIT_INSTANCE = "ui/components/selector/editInstance";
export const SELECT_OPTION = "ui/components/selector/selectOption";
export const CREATE_INSTANCE = "ui/components/selector/createInstance";
export const DELETE_INSTANCE = "ui/components/selector/deleteInstance";

export type SELECT_OPTION = typeof SELECT_OPTION
export type EDIT_INSTANCE = typeof EDIT_INSTANCE
export type CREATE_INSTANCE = typeof CREATE_INSTANCE
export type DELETE_INSTANCE = typeof DELETE_INSTANCE


// ---------- ACTIONS

export type SelectOptionAction<TOption extends {} = {}> = {
  type: SELECT_OPTION;
  meta?: undefined;
  error?: undefined;
  payload: {
    /** selector instance id */
    id: ID;
    query: Query<TOption>;
  };
}

export type EditInstanceAction<TOption extends {} = {}> = {
  type: EDIT_INSTANCE;
  meta?: undefined;
  error?: undefined;
  payload: {
    /** the id of the instance to edit */
    id: ID;
    edits: {
      /** the new options for instance */
      options?: undefined | Option<TOption>[];
      /** the new caption for instance */
      caption?: undefined | string;
      /** the index of the selected option */
      selected?: undefined | number;
      /** the new no-options-message for instance */
      noOptionsMessage?: undefined | string;
    }
  };
}

export type DeleteInstanceAction = {
  type: DELETE_INSTANCE;
  meta?: undefined;
  error?: undefined;
  payload: {
    /** selector instance id */
    id: ID;
  };
}

export type CreateInstanceAction<TOption extends {} = {}> = {
  type: CREATE_INSTANCE;
  meta?: undefined;
  error?: undefined;
  payload: {
    /** the id for the instance to create */
    id: ID;
    data: {
      /** the instance's options */
      options?: undefined | Option<TOption>[];
      /** the instance's caption */
      caption?: undefined | string;
      /** the instance's pre selected option's index */
      selected?: undefined | number;
      /** the instance's no-options-message */
      noOptionsMessage?: undefined | string;
    }
  };
}


// ---------- ACTIONS GROUPED

export type AnyAction = (
  | SelectOptionAction
  | EditInstanceAction
  | DeleteInstanceAction
  | CreateInstanceAction
)

export type AllActions = {
  [SELECT_OPTION]: SelectOptionAction;
  [EDIT_INSTANCE]: EditInstanceAction;
  [CREATE_INSTANCE]: CreateInstanceAction;
  [DELETE_INSTANCE]: DeleteInstanceAction;
}


// ---------- ACTION CREATORS

export const SelectOptionAction = <TOption extends {} = {}>(instance_id: ID, query: Query<TOption>): SelectOptionAction<TOption> => ({
  type: SELECT_OPTION,
  meta: undefined,
  error: undefined,
  payload: {id: instance_id, query},
});

export const EditInstanceAction = <TOption extends {} = {}>(instance_id: ID, edits: EditInstanceAction<TOption>["payload"]["edits"]): EditInstanceAction<TOption> => ({
  type: EDIT_INSTANCE,
  meta: undefined,
  error: undefined,
  payload: {id: instance_id, edits},
});

export const DeleteInstanceAction = (instance_id: ID): DeleteInstanceAction => ({
  type: DELETE_INSTANCE,
  meta: undefined,
  error: undefined,
  payload: {id: instance_id},
});

export const CreateInstanceAction = <TOption extends {} = {}>(instance_id: ID, instance_data: CreateInstanceAction<TOption>["payload"]["data"]): CreateInstanceAction<TOption> => ({
  type: CREATE_INSTANCE,
  meta: undefined,
  error: undefined,
  payload: {id: instance_id, data: instance_data},
});


// ---------- ACTION CREATOR ALIASES

export const edit = EditInstanceAction;
export const select = SelectOptionAction;
export const create = CreateInstanceAction;
export const delete_ = DeleteInstanceAction;


export default Object.freeze({
  SELECT_OPTION,
  EDIT_INSTANCE,
  CREATE_INSTANCE,
  DELETE_INSTANCE,
  SelectOptionAction,
  EditInstanceAction,
  CreateInstanceAction,
  DeleteInstanceAction,
  delete: delete_,
  select,
  create,
  edit,
});