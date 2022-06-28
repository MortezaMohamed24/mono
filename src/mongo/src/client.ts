import mongoose from "mongoose"
import {SERVER} from "./constants.js"


const connection = (async () => {
  await mongoose.connect(SERVER)
  return mongoose.connection
})()

const client = async () => {
  return connection.then(connection => connection.getClient())
}

const database = async () => {
  return connection.then(connection => connection.db)
}


export {client, database}