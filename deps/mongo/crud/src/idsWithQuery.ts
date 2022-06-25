import {Oid} from "#util/oid";
import deduplicate from "./deduplicate.js";


type Output<Ids extends Oid[] | undefined, Query extends object | undefined> = 
  Ids extends undefined 
    ? Query extends undefined 
      ? {}
      : Query 
    : Query extends undefined 
      ? {$or: {_id: Oid}[]}
      : Query & {$or: {_id: Oid}[]}


const idsWithQuery = <
  Ids extends Oid[] | undefined, 
  Query extends object | undefined,
>(ids: Ids, query: Query): Output<Ids, Query> => {
  let output: any = {};

  if (query) {
    output = {...query};
  } 
  
  if (ids) {
    if (ids.length > 0) {
      output.$or = deduplicate(ids).map(_id => ({_id}));
    } else {
      return {} as any;
    }
  }

  for (let key in output) {
    if (output[key] !== undefined) {
      return output;
    }
  }

  return {} as any;
};


export default idsWithQuery;