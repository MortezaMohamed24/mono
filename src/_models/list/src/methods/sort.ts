import List from "../Model.js"
import save from "save"
import {DATE_CREATED_ASCENDING} from "../constants.js" 
import {DATE_CREATED_DESCENDING} from "../constants.js"
import {ALPHABETICALLY_ASCENDING} from "../constants.js" 
import {ALPHABETICALLY_DESCENDING} from "../constants.js" 
import {sortByDateCreationAscending} from "../util/sorters.js"
import {sortAlphabeticallyAscending} from "../util/sorters.js"
import {sortByDateCreationDescending} from "../util/sorters.js"
import {sortAlphabeticallyDescending} from "../util/sorters.js"


async function sort(this: List, sortMethod: List["sortMethod"] = this.sortMethod): Promise<void> {
  this.sortMethod = sortMethod
  let cards = await this.cards()

  switch (this.sortMethod) {
    case DATE_CREATED_ASCENDING: cards = sortByDateCreationAscending(cards) break
    case DATE_CREATED_DESCENDING: cards = sortByDateCreationDescending(cards) break
    case ALPHABETICALLY_ASCENDING: cards = sortAlphabeticallyAscending(cards) break
    case ALPHABETICALLY_DESCENDING: cards = sortAlphabeticallyDescending(cards) break
  }

  this.idCards = cards.map(card => card.id)
  await save(this)
}


export default sort