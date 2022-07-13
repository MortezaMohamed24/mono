import editBoard from "./reducers/edit"
import destroyOne from "./reducers/destroyOne"
import addOneBoard from "./reducers/addOne"
import {navigate} from "/components/routerController/state"
import {useEffect} from "/store"
import {useReducer} from "/store"
import {EDIT_PENDING} from "../actions"
import {COPY_FULFILLED} from "../actions"
import {DESTROY_PENDING} from "../actions"
import {CREATE_FULFILLED} from "../actions"



useReducer(EDIT_PENDING, (state, {meta}) => {
  editBoard(state, meta)
})

useReducer(COPY_FULFILLED, (state, {payload}) => {
  addOneBoard(state, payload)
})

useEffect(COPY_FULFILLED, ({dispatch, action}) => {
  dispatch(navigate({
    url: `/boards/${action.payload.id}`,
    type: "push", 
  }))
})

useReducer(CREATE_FULFILLED, (state, {meta}) => {
  addOneBoard(state, {
    id: meta.id,
    lists: [],
    theme: meta.theme,
    title: meta.title,
    labels: meta.labels.map(item => ({
      id: item.id,
      name: item.name,
      color: item.color,
    })),
    isStarred: false,
    dateLastView: null,
  })
})

useEffect(CREATE_FULFILLED, ({dispatch, action}) => {
  dispatch(navigate({
    url: `/boards/${action.meta.id}`,
    type: "push", 
  }))
})

useReducer(DESTROY_PENDING, (state, {meta: {idBoard}}) => {
  destroyOne(state, {idBoard})
})