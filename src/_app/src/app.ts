import express from "express"


export const app = express()


export default app


import "mongo"
import "./auth.js"
import "./404.js"
import "./error.js"