import Card from "src/models/card";
import {Oid} from "#util/oid";
import Checklist from "src/models/checklist";


export interface ChecklistStaticsMakeArgument {
  id?: Oid | undefined;
  card: Card;
  title: Checklist["title"];
  filter?: Checklist["filter"];
}


export default ChecklistStaticsMakeArgument;