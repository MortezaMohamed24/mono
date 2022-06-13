import Card from "src/models/card";
import {Oid} from "#util/oid";
import {CARD} from "../../../constants/paths.js";


export function id(this: Card): Oid {
  return this._id;
}

export function url(this: Card): string {
  return `${CARD.href}/${this.id}`;
}


export default Object.freeze({id, url});