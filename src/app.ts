import "./mongo/client.js";
import "./passport/initialize.js";

import on404 from "#middleware/on404";
import logger from "morgan";
import onError from "#middleware/onError";
import express from "express";
import session from "src/ExpressSession/session";
import statics from "#middleware/statics";
import passport from "passport";
import UserRouter from "src/models/user/api/router";
import ListRouter from "src/models/list/api/router";
import CardRouter from "src/models/card/api/router";
import BoardRouter from "src/models/board/api/router";
import LabelRouter from "src/models/label/api/router";
import LoginRouter from "src/UserAuthorizerRoute";
import ChecklistRouter from "src/models/checklist/api/router";
import CheckitemRouter from "src/models/checkitem/api/router";


const app = express();


app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(statics());
app.use(session());
app.use(passport.initialize({userProperty: "user"}));
app.use(passport.session());
app.use(LoginRouter);

app.use("/api/users", UserRouter);
app.use("/api/lists", ListRouter);
app.use("/api/cards", CardRouter);
app.use("/api/boards", BoardRouter);
app.use("/api/labels", LabelRouter);
app.use("/api/checklists", ChecklistRouter);
app.use("/api/checkitems", CheckitemRouter);


app.use(on404);
app.use(onError);


export default app;