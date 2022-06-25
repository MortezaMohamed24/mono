import {Oid} from "./oid.js"


export function add(target: Oid[], source: Oid | Oid[], index: number = Infinity) {
  Array.isArray(source) 
    ? addMany(target, source, index) 
    : addOne(target, source, index)
}

export function addOne(target: Oid[], source: Oid, index: number = Infinity) {
  const added = target.includes(source)

  if (added) {
    throw new Error(`id.addOne(): Oid("${source}") is already added to ${target.map(id => `Oid("${id}")`)}`)
  }

  target.splice(index, 0, source)
}

export function addMany(target: Oid[], source: Oid[], index: number = Infinity) {
  const added = source.some(id => target.includes(id))

  if (added) {
    throw new Error(`id.addMany(): Some or all Oids are already added`)
  }

  target.splice(index, 0, ...source)
}

export function rem(target: Oid[], source: Oid | Oid[]) {
  Array.isArray(source) 
    ? remMany(target, source) 
    : remOne(target, source)
}

export function remOne(target: Oid[], source: Oid) {
  const index = target.indexOf(source)

  if (index === -1) {
    throw new Error(`id.addOne(): Oid("${source}") does not exists in ${target.map(id => `Oid("${id}")`)}`)
  }

  target.splice(index, 1)
}

export function remMany(target: Oid[], source: Oid[]) {
  for (let id of source) {
    remOne(target, id)
  }
}

export function move(ids: Oid[], id: Oid, indexB: number = Infinity) {
  const indexA = ids.indexOf(id)

  if (indexA === -1) {
    throw new Error(`Oid("${id}") does not exists in ${ids.map(id => `Oid("${id}")`)}`)
  }

  ids.splice(indexA, 1)
  ids.splice(indexB, 0, id)
}


export default Object.freeze({
  add,
  addOne,
  addMany,
  rem,
  remOne,
  remMany,
  move,
})