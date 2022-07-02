import EDIT from "./action.js";
import save from "src/models/util/save";
import Config from "./config.js";
import {PopulateAuthorizedUser} from "src/models/user-api/middlewares";


EDIT.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user",
}));


EDIT.push(async ({get, body: {username, lastname, password, initials, firstname}}) => {
  const {user} = get();

  if (username !== undefined) { 
    await user.setUsername(username); 
  } if (lastname !== undefined) { 
    user.lastname = lastname; 
  } if (password !== undefined) { 
    user.setPassword(password); 
  } if (initials !== undefined) { 
    user.initials = initials; 
  } if (firstname !== undefined) { 
    user.firstname = firstname; 
  }
  
  await save(user);
});