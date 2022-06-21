import {Oid} from "oid"
import {oidifyOne} from "oid"
import {LocalMethod} from "authenticator-local"
import {Authenticator} from "authenticator"


const authenticator = Authenticator({
  serializer(user: string) {
    return oidifyOne(user)
  },

  deserializer(user: Oid) {
    return user.toHexString()
  },
})


authenticator.use(
  LocalMethod({
    verify(username, password, request) {

    },

    usernameKey: "username",
    passwordKey: "password",
  })
)



export {authenticator}
export default authenticator