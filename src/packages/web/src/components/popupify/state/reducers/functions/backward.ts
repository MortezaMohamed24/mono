import {State} from "../../types";
import {PopupBackwardAction} from "../../actions";


export default function backward({history}: State, {id}: PopupBackwardAction["payload"]) {
  const length = history.length;
  // const index = history.indexOf(id);

  // if (index !== -1) {
  //   history.clear(index);
  // }

  if (length > 0) {
    history.pop();

    if (length > 0) {
      history.last.isOpen = true;
    }
  }
}