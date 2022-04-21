import {State} from "/store";


function clear({lg}: State) {
  lg.error = null;
  lg.status = "idle";
  lg.username = {value: "", isValid: false};
  lg.password = {value: "", isValid: false};
}


export default clear;