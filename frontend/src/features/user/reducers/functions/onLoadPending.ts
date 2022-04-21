import {State} from "../../../../store";


function onUserLoadPending(state: State) {
  state.ur = {
    $error: null, 
    $status: "loading",
  };
}


export default onUserLoadPending;