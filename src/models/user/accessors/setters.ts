import v from "src/models/user/fields/validators";
import User from "src/models/user";


export function avatar(this: User, avatar: User["avatar"]): User["avatar"] {
  return v.avatar(avatar);
}

export function initials(this: User, initials: User["initials"] | null): User["initials"] {
  return v.initials(initials);
}

export function lastname(this: User, lastname: User["lastname"]): User["lastname"] {
  return v.lastname(lastname);
}

export function firstname(this: User, firstname: User["firstname"]): User["firstname"] {
  return v.firstname(firstname);
}


export default Object.freeze({
  avatar,
  initials, 
  lastname, 
  firstname,
});