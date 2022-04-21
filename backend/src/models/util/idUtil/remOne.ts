import {Oid} from "#util/oid";


function remOne(target: Oid[], source: Oid) {
  const index = target.indexOf(source);

  if (index === -1) {
    throw new Error(`id.addOne(): Oid("${source}") does not exists in ${target.map(id => `Oid("${id}")`)}`);
  }

  target.splice(index, 1);
}


export default remOne;