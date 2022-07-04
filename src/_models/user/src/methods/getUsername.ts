import User from "../Model.js"


export function getUsername(this: User) {
  return this.username
}


export default getUsername