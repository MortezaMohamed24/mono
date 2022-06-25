import actions from "../actions/index.js";
import {Router} from "src/packages/express/express";


const boardsRouter = Router();


boardsRouter.post("/post", actions.COPY);
boardsRouter.post("/create", actions.CREATE);
boardsRouter.patch("/edit", actions.EDIT);
boardsRouter.delete("/destroy", actions.DESTROY);


export default boardsRouter;