import {State} from "/store";
import {EditAction} from "../../actions";


function edit({lg}: State, payload: EditAction["payload"]) {
  if ("error" in payload) { lg.error = payload.error; } 
  if ("status" in payload) { lg.status = payload.status; }
  
  if ("username" in payload) {
    if ("value" in payload.username) { lg.username.value = payload.username.value; }
    if ("isValid" in payload.username) { lg.username.isValid = payload.username.isValid; }
  }
  
  if ("password" in payload) { 
    if ("value" in payload.password) { lg.password.value = payload.password.value; }
    if ("isValid" in payload.password) { lg.password.isValid = payload.password.isValid; }
  }
}


export default edit;