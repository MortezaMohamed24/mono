import actions from "../actions/index.js";
import {Router} from "src/packages/express/express";


const listsRouter = Router();


listsRouter.get("/project", actions.PROJECT);
listsRouter.post("/copy", actions.COPY);
listsRouter.post("/create", actions.CREATE);
listsRouter.post("/copy-all-own-cards", actions.COPY_ALL_OWN_CARDS);
listsRouter.patch("/move", actions.MOVE);
listsRouter.patch("/edit", actions.EDIT);
listsRouter.patch("/sort", actions.SORT);
listsRouter.patch("/move-all-own-cards", actions.MOVE_ALL_OWN_CARDS);
listsRouter.delete("/destroy", actions.DESTROY);


export default listsRouter;