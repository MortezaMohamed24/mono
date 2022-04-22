import {State} from "/store";


function clear({sp}: State) {
  sp.error = null;
  sp.status = "idle";
  sp.username = {value: "", isValid: false};
  sp.password = {value: "", isValid: false};
  sp.lastname = {value: "", isValid: false};
  sp.firstname = {value: "", isValid: false};
}


export default clear;