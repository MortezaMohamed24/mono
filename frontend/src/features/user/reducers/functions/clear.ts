import {State} from "/store";


function clearUser(state: State) {
  state.ur = {$error: null, $status: "idle"};  
  state.bd.clear();
  state.ll.clear();
  state.lt.clear();
  state.cd.clear();
  state.ct.clear();
  state.cm.clear();
}


export default clearUser;