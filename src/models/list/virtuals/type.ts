import {Oid} from "#util/oid";


export type ListVirtuals = {
  /** The Oid of this document */
  get id(): Oid;
}


export default ListVirtuals;