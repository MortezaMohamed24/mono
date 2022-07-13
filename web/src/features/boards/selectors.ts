import {State} from "/store"
import {BoardNative} from "./entity"


type FindOneParam = (
  Parameters<State["bd"]["findOne"]>[0]
)

type FindManyParam = (
  Parameters<State["bd"]["findMany"]>[0]
)

const ids = ({bd}: State) => (
  bd.ids
)

const one = (query: FindOneParam) => ({bd}: State) => (
  bd.findOne(query)
)

const many = (query: FindManyParam) => ({bd}: State) => (
  bd.findMany(query)
)

const count = ({bd}: State) => (
  bd.count()
)

const opened = ({gl, bd}: State) => (
  gl.idBoardOpened 
    ? bd.findOne({id: gl.idBoardOpened}) as BoardNative
    : undefined as any as BoardNative
)

const entities = ({bd}: State) => (
  bd.entities
)

ids.starred = ({bd}: State) => (
  Object
    .values(bd.entities)
    .filter((board) => board.isStarred)
    .map(board => board.id)
)

one.title = (query: FindOneParam) => ({bd}: State) => (
  bd.findOne(query)?.title
)

one.theme = (query: FindOneParam) => ({bd}: State) => (
  bd.findOne(query)?.theme
)

one.isStarred = (query: FindOneParam) => ({bd}: State) => (
  bd.findOne(query)?.isStarred
)

one.dateLastView = (query: FindOneParam) => ({bd}: State) => (
  bd.findOne(query)?.dateLastView
)

opened.id = (state: State) => (
  opened(state)?.id
)

opened.title = (state: State) => (
  opened(state)?.title
)

opened.theme = (state: State) => (
  opened(state)?.theme
)

opened.idLists = (state: State) => (
  opened(state)?.idLists
)

opened.idLabels = (state: State) => (
  opened(state)?.idLabels
)

opened.isStarred = (state: State) => (
  opened(state)?.isStarred
)

opened.dateLastView = (state: State) => (
  opened(state)?.dateLastView
)


export {ids, one, many, count, opened, entities}
export default Object.freeze({ids, one, many, count, opened, entities})