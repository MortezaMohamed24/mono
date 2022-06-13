import {Oid} from "#util/oid";


function addOne(target: Oid[], source: Oid, index: number = Infinity) {
  const added = target.includes(source);

  if (added) {
    throw new Error(`id.addOne(): Oid("${source}") is already added to ${target.map(id => `Oid("${id}")`)}`);
  }

  target.splice(index, 0, source);
}


export default addOne;