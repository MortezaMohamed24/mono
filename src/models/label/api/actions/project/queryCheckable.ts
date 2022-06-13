import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./queryType.js";
import {labelProjectorCheckable} from "src/models/label/methods/project";


const bodyCheckable = OBJECT<BodyType>({
  idLabel: OID({}),
  projector: labelProjectorCheckable,
});


export default bodyCheckable;