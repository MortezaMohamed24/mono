import {State} from "/store";
import addOneLabel from "./addOne";
import {LabelRawUnnested} from "/features/labels/entity";


function addManyLabels(state: State, labels: LabelRawUnnested[]) {
  for (let entity of labels) {
    addOneLabel(state, entity);
  }
}


export default addManyLabels;