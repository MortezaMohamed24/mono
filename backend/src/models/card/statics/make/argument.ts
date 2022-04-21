import List from "#models/list";
import {Oid} from "#util/oid";
import Label from "#models/label";


interface CardStaticsMakeArgument {
  id?: Oid | undefined;
  list: List;
  title: string;
  labels?: Label[] | undefined;
  description?: string | null | undefined;
}


export default CardStaticsMakeArgument;