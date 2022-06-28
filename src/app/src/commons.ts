import app from "./app.js"
import log from "morgan"
import {express} from "express"


app.use(log("common"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))