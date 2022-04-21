import {Oid} from "#util/oid";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";


interface CheckitemProjectRequestQuery {
  readonly projector: CheckitemProjectorType;
  readonly idCheckitem: Oid;
}


export default CheckitemProjectRequestQuery;