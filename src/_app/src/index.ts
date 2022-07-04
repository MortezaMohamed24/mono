import {SERVER} from "../../mongo/src/constants.js"
import {Session} from "express-session"
import SESSSION from "express-session"
import MongoStore from "connect-mongo"
import {SessionData} from "express-session"


const day = (
  1000 * 60 * 60 * 24
)

const store = MongoStore.create({ 
  ttl: day * 15,
  dbName: "data",
  mongoUrl: SERVER, 
  collectionName: "sessions",
})

const session = () => (
  SESSSION.session({
    store: store,
    secret: "Cat",
    resave: false,
    cookie: {maxAge: day * 15},
    saveUninitialized: true,
  })
)


export {session}
export default session