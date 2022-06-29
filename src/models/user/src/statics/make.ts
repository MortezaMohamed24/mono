import User from "../Model.js"
import save from "save"


type Arg = {
  username: string
  lastname: string
  password: string
  firstname: string
}

const make = async ({username, lastname, password, firstname}: Arg): Promise<User> => {
  const user = new User({
    avatar: null,
    initials: (firstname.slice(0, 1) + lastname.slice(0, 1)).toUpperCase(),
    lastname,
    firstname,
  })

  user.setPassword(password)
  
  await user.setUsername(username)
  await save(user)

  return user
}


export {make}
export default make