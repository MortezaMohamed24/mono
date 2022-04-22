import {State} from "/store";


type FindOnePara = Parameters<State["lt"]["findOne"]>[0]
type FindManyPara = Parameters<State["lt"]["findMany"]>[0]


const one = (query: FindOnePara) => ({lt}: State) => (
  lt.findOne(query)
);

const many = (query: FindManyPara) => ({lt}: State) => (
  lt.findMany(query)
);


one.title = (query: FindOnePara) => ({lt}: State) => (
  lt.findOne(query)?.title
);

one.isWatched = (query: FindOnePara) => ({lt}: State) => (
  lt.findOne(query)?.isWatched
);

one.sortMethod = (query: FindOnePara) => ({lt}: State) => (
  lt.findOne(query)?.sortMethod
);


export default Object.freeze({one, many});