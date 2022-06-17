import {SERVER} from "../mongo/constants.js"
import MongoStore from "connect-mongo"
import expressSession from "express-session"


const day = 1000 * 60 * 60 * 24

const store = MongoStore.create({ 
  ttl: day * 15,
  dbName: "data",
  mongoUrl: SERVER, 
  collectionName: "sessions",
})

const session = () => (
  expressSession({
    store: store,
    secret: "Mikasa is lovely",
    resave: false,
    cookie: {maxAge: day * 15},
    saveUninitialized: true,
  })
)


export {session}
export default session