import actions from "../actions/index.js";
import {Router} from "express";


const checklistsRouter = Router();


checklistsRouter.get("/project", actions.PROJECT);
checklistsRouter.post("/create", actions.CREATE);
checklistsRouter.patch("/edit", actions.EDIT);
checklistsRouter.delete("/destroy", actions.DESTROY);


export default checklistsRouter;