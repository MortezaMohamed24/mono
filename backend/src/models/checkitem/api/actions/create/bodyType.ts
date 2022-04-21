import {Oid} from "#util/oid";


interface CheckitemCreateActionBody  {
  /** The id for the checkitem to create */
  readonly id?: Oid | undefined;
  /** The checkitem's content. */
  readonly content: string;
  /** The id of the checklist for which to create a checkitem. */
  readonly idChecklist: Oid;
}


export default CheckitemCreateActionBody;