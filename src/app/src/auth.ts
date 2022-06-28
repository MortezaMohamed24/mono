import app from "./app.js"
import Oid from "oid"
import Auth from "authenticator"
import {Customize} from "express"
import {ManagerUnresolved} from "authenticator"


export type User = {
  id: Oid
}

export type Config = {
  user: User
  kRequest: "AUTH", 
  kSession: "__AUTH__"
}


export type Stop0 = Customize<{
  AUTH: ManagerUnresolved<Config>
}>

export type Stop1 = (
  Stop0
)


app.use(Auth.Manager<Config>({
  kRequest: "AUTH",
  kSession: "__AUTH__",
  serialize: (user) => user.id.toString(),
  useSession: true,
}))

app.use(Auth.Local({
  verify: "" as any,
  usernameKey: "username",
  passwordKey: "password",
}))