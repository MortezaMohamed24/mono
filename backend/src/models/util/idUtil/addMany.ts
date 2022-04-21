import {Oid} from "#util/oid";


function addMany(target: Oid[], source: Oid[], index: number = Infinity) {
  const added = source.some(id => target.includes(id));

  if (added) {
    throw new Error(`id.addMany(): Some or all Oids are already added`);
  }

  target.splice(index, 0, ...source);
}


export default addMany;