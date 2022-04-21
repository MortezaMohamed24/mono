import v from "#models/checklist/fields/validators";
import {ALL} from "#models/checklist/fields/constants";
import {Oid} from "#util/oid";
import Argument from "./argument.js";
import Checklist from "#models/checklist";


async function make({id, card, title, filter = ALL}: Argument) {
  const checklist = new Checklist({
    id: id ?? new Oid(),
    title: v.title(title), 
    filter: v.filter(filter),
  });

  await checklist.attach(card);

  return checklist;
};


export default make;