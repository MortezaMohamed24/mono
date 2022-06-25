import {State} from "/store";


type FindOneParam = Parameters<State["ll"]["findOne"]>[0]
type FindManyParam = Parameters<State["ll"]["findMany"]>[0]


const one = (query: FindOneParam) => ({ll}: State) => (
  ll.findOne(query)
);

const many = (query: FindManyParam) => ({ll}: State) => (
  ll.findMany(query)
);


one.name_ = (query: FindOneParam) => ({ll}: State) => (
  ll.findOne(query)?.name
);

one.color = (query: FindOneParam) => ({ll}: State) => (
  ll.findOne(query)?.color
);


export {one, many};
export default Object.freeze({one, many});