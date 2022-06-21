import actions from "../actions/index.js";
import {Router} from "express";


const cardsRouter = Router();

cardsRouter.get("/project", actions.PROJECT);
cardsRouter.post("/copy", actions.COPY);
cardsRouter.post("/create", actions.CREATE);
cardsRouter.patch("/edit", actions.EDIT);
cardsRouter.patch("/label", actions.LABEL);
cardsRouter.patch("/move", actions.MOVE);
cardsRouter.patch("/unlabel", actions.UNLABEL);
cardsRouter.patch("/set-labels", actions.SET_LABELS);
cardsRouter.delete("/destroy", actions.DESTROY);


export default cardsRouter;