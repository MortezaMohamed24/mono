import Card from "src/Card";
import CREATE from "./action.js";
import Config from "./config.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";
import {PopulateLabelsByBody} from "src/models/label/api/middlewares";


CREATE.push(({body}) => {
  console.log("body: ", body)
})

CREATE.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));

CREATE.push(PopulateLabelsByBody<Config, "labels", "idLabels">({
  labelsKey: "labels",
  idLabelsKey: "idLabels",
}));


CREATE.push(async ({set, get, body: {id, title, description}}) => {
  const {list, labels} = get();

  const card = await Card.make({
    id,
    list,
    title,
    labels,
    description,
  });

  set({card});  
});


CREATE.push(async ({get}) => {

  return await get().card.project();

});