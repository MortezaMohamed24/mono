import v from "/features/boards/fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {BoardEditRequestMeta} from "/features/boards/actions";


function editBoard({bd}: State, meta: BoardEditRequestMeta) {
  const board = bd.findOne({id: meta.idBoard});
  const title = v.title(meta.title);
  const theme = v.theme(meta.theme);
  const isStarred = v.isStarred(meta.isStarred);
  
  
  if (!board) { 
    return; 
  } if (title !== INVALID) { 
    board.title = title;
  } if (theme !== INVALID) {
    board.theme = theme;
  } if (isStarred !== INVALID) {
    board.isStarred = isStarred;
  }
}


export default editBoard;