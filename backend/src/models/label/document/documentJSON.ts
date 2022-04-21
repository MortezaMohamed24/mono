import {Oid} from "#util/oid";
import {COLORS} from "../fields/constants.js";


interface LabelDocumentType {
  id: Oid;
  name: string | null;
  color: keyof typeof COLORS;
  idUser: Oid;
  idBoard: Oid;
}


export default LabelDocumentType;