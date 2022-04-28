import {State} from "../../types";


export default function backward({history}: State) {
  const length = history.length;

  if (length > 0) {
    history.pop();

    if (length > 0) {
      history.last.isOpen = true;
    }
  }
}