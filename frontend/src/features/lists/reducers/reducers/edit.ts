import {State} from "/store";
import {INVALID} from "/util/formatter";
import formatters from "../../fields/formatters";
import {ListEditRequestMeta} from "/features/lists/actions";


function editList({lt}: State, meta: ListEditRequestMeta) {
  const list = lt.findOne({id: meta.idList});
  const title = formatters.title(meta.title, {strict: false});
  const isWatched = formatters.isWatched(meta.isWatched, {strict: false});

  if (!list) { 
    return; 
  } if (title !== INVALID) {
    list.title = title;
  } if (isWatched !== INVALID) {
    list.isWatched = isWatched;
  }
}


export default editList;