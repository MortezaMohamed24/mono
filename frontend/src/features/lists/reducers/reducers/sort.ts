import {State} from "../../../../store";
import sorters from "/lists/util/sorters";
import {ListSortRequestMeta} from "/lists/actions";
import {DATE_CREATED_ASCENDING} from "/lists/fields";
import {DATE_CREATED_DESCENDING} from "/lists/fields";
import {ALPHABETICALLY_ASCENDING} from "/lists/fields";
import {ALPHABETICALLY_DESCENDING} from "/lists/fields";


function sortList({lt, cd}: State, {idList, method}: ListSortRequestMeta) {
  const list = lt.findOne({id: idList});
  
  if (list) {
    let cards = cd.findMany({idList});
  
    list.sortMethod = method;
  
    switch (method) {
      case DATE_CREATED_ASCENDING: cards = sorters.sortByDateCreationAscending(cards); break;
      case DATE_CREATED_DESCENDING: cards = sorters.sortByDateCreationDescending(cards); break;
      case ALPHABETICALLY_ASCENDING: cards = sorters.sortAlphabeticallyAscending(cards); break;
      case ALPHABETICALLY_DESCENDING: cards = sorters.sortAlphabeticallyDescending(cards); break;
    }
  
    list.idCards = cards.map(card => card.id);
  }
}


export default sortList;