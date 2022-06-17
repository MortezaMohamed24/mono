import {Oid} from "#util/oid";


type Output<ID extends Oid | undefined, Query extends object | undefined> = ID extends undefined 
  ? Query extends undefined 
    ? {} 
    : Query 
  : Query extends undefined 
    ? {_id: Oid} 
    : Query & {_id: Oid}


const idWithQuery = <
  Id extends Oid | undefined, 
  Query extends object | undefined,
>(id: Id, query: Query): Output<Id, Query> => {
  let output: any = {};

  if (query) {
    output = {...query};
  } if (id) {
    output._id = id;
  } 

  return output;
};


export default idWithQuery;