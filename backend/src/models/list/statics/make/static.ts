import v from "#models/list/fields/validators";
import List from "#models/list";
import {Oid} from "#util/oid";
import Argument from "./argument.js";
import {DATE_CREATED_ASCENDING} from "#models/list/fields/constants"; 


async function make({
  id = new Oid(),
  title,
  board, 
  sortMethod = DATE_CREATED_ASCENDING,
}: Argument) {
  const list = new List({
    id: id,
    title: v.title(title), 
    sortMethod: v.sortMethod(sortMethod),
  });

  await list.attach(board);

  return list;
}


export default make;