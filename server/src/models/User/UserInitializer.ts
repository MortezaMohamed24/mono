import {User} from "./User.js"


export type UserInitializer = {
  avatar: User["avatar"]
  username: User["username"]
  lastname: User["lastname"]
  initials: User["initials"]
  password: User["password"]
  firstname: User["firstname"]
}


export default UserInitializer