import User from "src/models/user";


function getUsername(this: User) {
  return this.username;
}


export default getUsername;