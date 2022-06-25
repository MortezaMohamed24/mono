import {State} from "/store";
import {EditAction} from "../../actions";


function edit({sp}: State, payload: EditAction["payload"]) {
  if (payload.error) { sp.error = payload.error; } 
  if (payload.status) { sp.status = payload.status; }

  if (payload.username?.value !== undefined) { sp.username.value = payload.username.value; }
  if (payload.password?.value !== undefined) { sp.password.value = payload.password.value; }
  if (payload.lastname?.value !== undefined) { sp.lastname.value = payload.lastname.value; }
  if (payload.firstname?.value !== undefined) { sp.firstname.value = payload.firstname.value; }
  
  if (payload.username?.isValid !== undefined) { sp.username.isValid = payload.username.isValid; }
  if (payload.password?.isValid !== undefined) { sp.password.isValid = payload.password.isValid; }
  if (payload.lastname?.isValid !== undefined) { sp.lastname.isValid = payload.lastname.isValid; }
  if (payload.firstname?.isValid !== undefined) { sp.firstname.isValid = payload.firstname.isValid; }  

  sp.validity = (
    sp.username.isValid
  ) && (
    sp.password.isValid
  )  && (
    sp.lastname.isValid
  ) && (
    sp.firstname.isValid
  );
}


export default edit;