import List from "#models/list";
import save from "#models/util/save";
import {DATE_CREATED_ASCENDING} from "#models/list/fields/constants"; 
import {DATE_CREATED_DESCENDING} from "#models/list/fields/constants";
import {ALPHABETICALLY_ASCENDING} from "#models/list/fields/constants"; 
import {ALPHABETICALLY_DESCENDING} from "#models/list/fields/constants"; 
import sortByDateCreationAscending from "./sortByDateCreationAscending.js";
import sortAlphabeticallyAscending from "./sortAlphabeticallyAscending.js";
import sortByDateCreationDescending from "./sortByDateCreationDescending.js";
import sortAlphabeticallyDescending from "./sortAlphabeticallyDescending.js";


async function sort(this: List, sortMethod: List["sortMethod"] = this.sortMethod) {
  this.sortMethod = sortMethod;
  let cards = await this.cards();

  switch (this.sortMethod) {
    case DATE_CREATED_ASCENDING: cards = sortByDateCreationAscending(cards); break;
    case DATE_CREATED_DESCENDING: cards = sortByDateCreationDescending(cards); break;
    case ALPHABETICALLY_ASCENDING: cards = sortAlphabeticallyAscending(cards); break;
    case ALPHABETICALLY_DESCENDING: cards = sortAlphabeticallyDescending(cards); break;
  }

  this.idCards = cards.map(card => card.id);
  await save(this);
}


export default sort;