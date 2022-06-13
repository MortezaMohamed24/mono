import User from "src/models/user";
import CREATE from "./action.js";


CREATE.push(async ({set, body: {username, firstname, lastname, password}}) => {
  set({
    user: await User.make({
      username, 
      password,
      lastname, 
      firstname, 
    }),
  });
});