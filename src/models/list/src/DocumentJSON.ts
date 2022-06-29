import {Oid} from "#util/oid";
import {DATE_CREATED_ASCENDING} from "src/models/list/fields/constants";
import {DATE_CREATED_DESCENDING} from "src/models/list/fields/constants";
import {ALPHABETICALLY_ASCENDING} from "src/models/list/fields/constants";
import {ALPHABETICALLY_DESCENDING} from "src/models/list/fields/constants";


export interface ListDocumentType {
  id: Oid;
  title: string;
  idUser: Oid;
  idBoard: Oid;
  idCards: Oid[];
  isWatched: boolean;
  sortMethod: 
    | typeof DATE_CREATED_ASCENDING 
    | typeof DATE_CREATED_DESCENDING 
    | typeof ALPHABETICALLY_ASCENDING 
    | typeof ALPHABETICALLY_DESCENDING
}


export default ListDocumentType;