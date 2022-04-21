import actions from "../actions/index.js";
import {Router} from "express";


const labelsRouter = Router();


labelsRouter.get("/project", actions.PROJECT);
labelsRouter.post("/create", actions.CREATE);
labelsRouter.patch("/edit", actions.EDIT);
labelsRouter.delete("/destroy", actions.DESTROY);


export default labelsRouter;