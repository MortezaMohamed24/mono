import List from "src/models/list";
import {Oid} from "#util/oid";
import Argument from "./argument.js";
import {DATE_CREATED_ASCENDING} from "src/models/list/fields/constants"; 


async function make({
  id = new Oid(),
  title,
  board, 
  sortMethod = DATE_CREATED_ASCENDING,
}: Argument) {
  const list = new List({
    _id: id,
    title: title, 
    sortMethod: sortMethod,
  });

  await list.attach(board);

  return list;
}


export default make;