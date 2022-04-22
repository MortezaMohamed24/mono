import {State} from "/store";


function onLoadRejected(state: State, error: unknown) {
  state.ur = {
    $error: Object.prototype.valueOf.call(error), 
    $status: "failed",
  };
}


export default onLoadRejected;