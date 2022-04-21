import {KEY} from "#models/label/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import LabelProjectorType from "./projectorType.js";


const labelProjectorCheckable = OBJECT<LabelProjectorType>({
  keys: ARRAY([
    STRING({trim: "both", pattern: KEY}),
  ]),
});


export default labelProjectorCheckable;