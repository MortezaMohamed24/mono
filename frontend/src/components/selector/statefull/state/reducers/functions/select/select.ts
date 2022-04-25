import {NAME} from "../../../constants";
import indexOf from "./indexOf";
import {ReadonlyState} from "/store";
import {SelectorSelectAction} from "../../../actions";


function select(state: ReadonlyState, {id, option}: SelectorSelectAction["payload"]) {
  const slice = state[NAME];

  if (slice.isOpen) {
    if (slice.id === id) {
      slice.selected = indexOf({
        
      });
    }
  }
}