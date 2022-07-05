import User from "./Model.js"
import types from "./fields/types.js"


export function avatar(this: User, avatar: User["avatar"]): User["avatar"] {
  return types.avatar(avatar, {strict: true})
}

export function initials(this: User, initials: User["initials"] | null): User["initials"] {
  return types.initials(initials, {strict: true})
}

export function lastname(this: User, lastname: User["lastname"]): User["lastname"] {
  return types.lastname(lastname, {strict: true})
}

export function firstname(this: User, firstname: User["firstname"]): User["firstname"] {
  return types.firstname(firstname, {strict: true})
}


export default Object.freeze({
  avatar,
  initials, 
  lastname, 
  firstname,
})