import {Oid} from "#util/oid";
import Label from "src/models/label/Label";


interface LabelCreateActionBody {
  readonly id?: Oid | undefined;
  /** The name of the label to create. */
  readonly name: Label["name"]; 
  /** The color of the label to create. */
  readonly color: Label["color"];
  /** The id of the bard for which to create a label. */
  readonly idBoard: Oid; 
}


export default LabelCreateActionBody;