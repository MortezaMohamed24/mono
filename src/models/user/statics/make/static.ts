import User from "src/models/user";
import save from "src/models/util/save";
import Argument from "./argument.js";


async function make({username, lastname, password, firstname}: Argument) {
  const user = new User({
    avatar: null,
    initials: (firstname.slice(0, 1) + lastname.slice(0, 1)).toUpperCase(),
    lastname,
    firstname,
  });

  user.setPassword(password);
  
  await user.setUsername(username);
  await save(user);

  return user;
};


export default make;