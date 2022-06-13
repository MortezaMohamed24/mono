import {Oid} from "#util/oid";
import Label from "src/models/label";


interface LabelEditActionBody {
  /** The id of the label to edit. */
  readonly idLabel: Oid;
  /** The new name for label. */
  readonly name?: Label["name"] | undefined;
  /** The new color for label. */
  readonly color?: Label["color"] | undefined;
}


export default LabelEditActionBody;