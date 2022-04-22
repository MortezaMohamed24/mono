import v from "../../fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {ListEditRequestMeta} from "/features/lists/actions";


function editList({lt}: State, meta: ListEditRequestMeta) {
  const list = lt.findOne({id: meta.idList});
  const title = v.title(meta.title);
  const isWatched = v.isWatched(meta.isWatched);

  if (!list) { 
    return; 
  } if (title !== INVALID) {
    list.title = title;
  } if (isWatched !== INVALID) {
    list.isWatched = isWatched;
  }
}


export default editList;