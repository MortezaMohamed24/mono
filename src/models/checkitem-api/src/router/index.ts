import actions from "../actions/index.js";
import {Router} from "src/packages/express/express";


const checkitemsRouter = Router();


checkitemsRouter.get("/project", actions.PROJECT);
checkitemsRouter.post("/create", actions.CREATE);
checkitemsRouter.patch("/edit", actions.EDIT);
checkitemsRouter.patch("/move", actions.MOVE);
checkitemsRouter.delete("/destroy", actions.DESTROY);


export default checkitemsRouter;