import express from "express"


const app = express()

app.use<"hgjg", {}, {title: ""}, {}, {}, {}>("hgjg",
  (inbound, outbound, proceed) => {
    inbound.body.title
  }
)

import actions from "./actions/index.js";
import middlewares from "./middlewares/index.js";


export {
  actions,
  middlewares,
};


export default Object.freeze({
  actions,
  middlewares,
});