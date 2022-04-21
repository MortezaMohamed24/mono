import {Oid} from "#util/oid";


export interface  CardVirtualGetters {
  get id(): Oid;
  get url(): string;
}


export default CardVirtualGetters;