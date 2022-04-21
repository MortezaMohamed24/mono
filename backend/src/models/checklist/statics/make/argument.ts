import Card from "#models/card";
import {Oid} from "#util/oid";
import Checklist from "#models/checklist";


export interface ChecklistStaticsMakeArgument {
  id?: Oid | undefined;
  card: Card;
  title: Checklist["title"];
  filter?: Checklist["filter"];
}


export default ChecklistStaticsMakeArgument;