import {State} from "/store";
import {CardNative} from "./entity";


type FindOneParam = Parameters<State["cd"]["findOne"]>[0];
type FindManyParam = Parameters<State["cd"]["findMany"]>[0];


function ids({cd}: State) {
  return cd.ids;
}

function one(query: FindOneParam) {
  return ({cd}: State) => cd.findOne(query);
}

function many(query: FindManyParam) {
  return ({cd}: State) => cd.findMany(query);
}

function opened({cd, gl}: State) {
  // TODO: Set the return type to `undefined | CardNative`
  return (
    gl.idCardOpened 
      ? cd.findOne({id: gl.idCardOpened}) 
      : undefined
    ) as CardNative
}

function entities({cd}: State) {
  return cd.entities;
}


one.title = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.title;
one.dateDue = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.dateDue;
one.idLabels = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.idLabels;
one.dateStart = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.dateStart;
one.isWatched = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.isWatched;
one.isComplete = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.isComplete;
one.description = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.description;
one.idChecklists = (query: FindOneParam) => ({cd}: State) => cd.findOne(query)?.idChecklists;


opened.id = (state: State) => opened(state).id;
opened.title = (state: State) => opened(state).title;
opened.dateDue = (state: State) => opened(state).dateDue;
opened.idLabels = (state: State) => opened(state).idLabels;
opened.dateStart = (state: State) => opened(state).dateStart;
opened.isWatched = (state: State) => opened(state).isWatched;
opened.isComplete = (state: State) => opened(state).isComplete;
opened.description = (state: State) => opened(state).description;
opened.idChecklists = (state: State) => opened(state).idChecklists;


export {ids, one, many, opened, entities};
export default Object.freeze({ids, one, many, opened, entities});