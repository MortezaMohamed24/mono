import {Oid} from "#util/oid";


function move(ids: Oid[], id: Oid, indexB: number = Infinity) {
  const indexA = ids.indexOf(id);

  if (indexA === -1) {
    throw new Error(`Oid("${id}") does not exists in ${ids.map(id => `Oid("${id}")`)}`);
  }

  ids.splice(indexA, 1);
  ids.splice(indexB, 0, id);
}


export default move;