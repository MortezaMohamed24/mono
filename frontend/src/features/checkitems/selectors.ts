import {State} from "../../store";


type FindOneParam = Parameters<State["cm"]["findOne"]>[0]
type FindManyParam = Parameters<State["cm"]["findMany"]>[0]


function one(id: FindOneParam) {
  return ({cm}: State) => cm.findOne(id);
}

function many(ids: FindManyParam) {
  return ({cm}: State) => cm.findMany(ids);
}

function count(query: FindManyParam) {
  return ({cm}: State) => {
    const checkitems = cm.findMany(query);
    const totalCount = checkitems.length;
    let completeCount = 0;
  
  
    for (let checkitem of checkitems) {
      if (checkitem.isComplete) {
        completeCount++;
      }
    }
  
  
    return {total: totalCount, complete: completeCount};
  };
}


one.content = (query: FindOneParam) => ({cm}: State) => (
  cm.findOne(query)?.content
);

one.isComplete = (query: FindOneParam) => ({cm}: State) => (
  cm.findOne(query)?.isComplete
);


export {one, many, count}
export default Object.freeze({one, many, count})