import actions from "../actions/index.js";
import {Router} from "src/packages/express/express";


const usersRouter = Router();


usersRouter.get("/project", actions.PROJECT);
usersRouter.post("/create", actions.CREATE);
usersRouter.patch("/edit", actions.EDIT);
usersRouter.delete("/destroy", actions.DESTROY);


export default usersRouter;