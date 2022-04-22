import {State} from "/store";
import {UserEditRequestMeta} from "../../actions";


function onUserEditFulfilled({ur}: State, meta: UserEditRequestMeta) {
  if (ur.$status === "succeeded") {
    if (meta.username !== undefined) { ur.username = meta.username; }
    if (meta.initials !== undefined) { ur.initials = meta.initials; }
    if (meta.lastname !== undefined) { ur.lastname = meta.lastname; }
    if (meta.firstname !== undefined) { ur.firstname = meta.firstname; }
  }
}


export default onUserEditFulfilled;