import {NAME} from "../../optionsListPopup/state/constants";
import indexOf from "./indexOf";
import {ReadonlyState} from "/store";
import {SelectorSelectAction} from "../../optionsListPopup/state/actions";


function select(state: ReadonlyState, {id, query}: SelectorSelectAction["payload"]) {
  const slice = state[NAME];

  if (slice.isOpen && slice.id === id) {
    slice.selected = indexOf({
      query: query,
      options: slice.options,
      selected: slice.selected,
    });
  }
}