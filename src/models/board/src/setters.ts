import Board from "./Model.js"
import types from "./fields/formats.js"

  
export function title(this: Board, title: Board["title"]): Board["title"] {
  return types.title(title, {strict: true})
}

export function theme(this: Board, theme: Board["theme"]): Board["theme"] {
  return types.theme(theme, {strict: true}) as Board["theme"]
}

export function isStarred(this: Board, isStarred: Board["isStarred"]): Board["isStarred"] {
  return types.isStarred(isStarred, {strict: true})
}


export default Object.freeze({
  title, 
  theme, 
  isStarred,
})