import {State} from "/store";
import {EditAction} from "../../actions";


function edit({sp}: State, payload: EditAction["payload"]) {
  if (payload.error) { sp.error = payload.error; } 
  if (payload.status) { sp.status = payload.status; }

  if (payload.username?.value) { sp.username.value = payload.username.value; }
  if (payload.password?.value) { sp.password.value = payload.password.value; }
  if (payload.lastname?.value) { sp.lastname.value = payload.lastname.value; }
  if (payload.firstname?.value) { sp.firstname.value = payload.firstname.value; }
  
  if (payload.username?.isValid) { sp.username.isValid = payload.username.isValid; }
  if (payload.password?.isValid) { sp.password.isValid = payload.password.isValid; }
  if (payload.lastname?.isValid) { sp.lastname.isValid = payload.lastname.isValid; }
  if (payload.firstname?.isValid) { sp.firstname.isValid = payload.firstname.isValid; }  
}


export default edit;