import {State} from "../../store";


type FindOneParam = Parameters<State["ct"]["findOne"]>[0]
type FindManyParam = Parameters<State["ct"]["findMany"]>[0]


function one(id: FindOneParam) {
  return ({ct}: State) => ct.findOne(id)
}

function many(ids: FindManyParam) {
  return ({ct}: State) => ct.findMany(ids)
}


one.title = function(query: FindOneParam) {
  return ({ct}: State) => ct.findOne(query)?.title;
}

one.filter = function(query: FindOneParam) {
  return ({ct}: State) => ct.findOne(query)?.filter
} 


export {one, many};
export default Object.freeze({one, many});