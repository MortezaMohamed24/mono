import {Oid} from "#util/oid";


interface BoardVirtuals {
  get id(): Oid;
  get url(): string;
}


export default BoardVirtuals;