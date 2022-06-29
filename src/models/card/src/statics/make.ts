import List from "src/models/list";
import {Oid} from "#util/oid";
import Label from "src/models/label";


interface CardStaticsMakeArgument {
  id?: Oid | undefined;
  list: List;
  title: string;
  labels?: Label[] | undefined;
  description?: string | null | undefined;
}


// export default CardStaticsMakeArgument;

import v from "src/models/card/fields/validators";
import Card from "src/models/card";
import {Oid} from "#util/oid";
import Argument from "./argument.js";


async function make({id = new Oid(), list, title, labels = [], description = null}: Argument) {
  const card = new Card({
    id: id,
    title: v.title(title),
    dateDue: null,
    dateStart: null,
    isWatched: false,
    isComplete: false,
    description: v.description(description),
    dateCreation: Date.now(),
    dateLastView: null,
    dateLastActivity: Date.now(),
  });

  await card.attach(list);
  await card.setLabels(labels);

  return card;
}


export default make;