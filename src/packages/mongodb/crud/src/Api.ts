import {Oid} from "oid"
import isEmpty from "./isEmpty.js"
import Querify from "./Querify.js"
import Updatify from "./Updatify.js"
import mongoose from "mongoose"
import idWithQuery from "./idWithQuery.js"
import idsWithQuery from "./idsWithQuery.js"


const Api = <
  Methods extends object,
  Virtuals extends object,
  DocumentType extends object, 
>(name: string, Model: mongoose.Model<DocumentType, {}, Methods, Virtuals>) => {
  type Query = Querify<DocumentType>
  type Update = Updatify<DocumentType>
  type Document = mongoose.Document & DocumentType & Methods & Virtuals


  async function findOne(id: Oid): Promise<null | Document>
  async function findOne(query: Query): Promise<null | Document>
  async function findOne(id: Oid, query: Query): Promise<null | Document>
  async function findOne(p0: Oid | Query, p1?: Query): Promise<null | Document> {
    let id: Oid | undefined
    let query: Query | undefined

    if (p0 instanceof Oid) {
      id = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idWithQuery(id, query)

    if (isEmpty(finalQuery)) {
      return null
    }

    return await Model.findOne(finalQuery)
  }
  
  async function findMany(p0: Oid[]): Promise<Document[]>
  async function findMany(p0: Query): Promise<Document[]>
  async function findMany(p0: Oid[], p1: Query): Promise<Document[]>
  async function findMany(p0: Oid[] | Query, p1?: Query): Promise<Document[]> {
    let ids: Oid[] | undefined | undefined
    let query: Query | undefined

    if (Array.isArray(p0)) {
      ids = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idsWithQuery(ids, query)

    if (!finalQuery) {
      return []
    }

    const documents: Document[] = await Promise.all([...await Model.find(finalQuery)])

    if (!ids) {
      return documents
    }

    const sorted: Document[] = []

    for (let id of ids) {
      const document = documents.find(document => document.id == id)

      if (document) {
        sorted.push(document)
      }
    }

    return documents
  }

  async function destroyOne(id: Oid): Promise<void>
  async function destroyOne(query: Query): Promise<void>
  async function destroyOne(id: Oid, query: Query): Promise<void>
  async function destroyOne(p0: Oid | Query, p1?: Query): Promise<void> {
    let id: Oid | undefined
    let query: Query | undefined

    if (p0 instanceof Oid) {
      id = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idWithQuery(id, query)

    if (!isEmpty(finalQuery)) {
      await Model.deleteOne(finalQuery)
    }
  }

  async function destroyMany(ids: Oid[]): Promise<void>
  async function destroyMany(query: Query): Promise<void>
  async function destroyMany(ids: Oid[], query: Query): Promise<void>
  async function destroyMany(p0: Oid[] | Query, p1?: Query): Promise<void> {
    let ids: Oid[] | undefined
    let query: Query | undefined

    if (Array.isArray(p0)) {
      ids = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idsWithQuery(ids, query)

    if (!isEmpty(finalQuery)) {
      await Model.deleteMany(finalQuery)
    }
  }

  async function hasOne(id: Oid): Promise<boolean>
  async function hasOne(query: Query): Promise<boolean>
  async function hasOne(id: Oid, query: Query): Promise<boolean>
  async function hasOne(p0: Oid | Query, p1?: Query): Promise<boolean> {
    let id: Oid | undefined
    let query: Query | undefined

    if (p0 instanceof Oid) {
      id = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idWithQuery(id, query)

    if (isEmpty(finalQuery)) {
      return true
    }

    return !!(await Model.findOne(finalQuery))
  }
  
  async function hasEach(ids: Oid[]): Promise<boolean>
  async function hasEach(ids: Oid[], query: Query): Promise<boolean>
  async function hasEach(p0: Oid[], p1?: Query): Promise<boolean> {
    let ids = p0
    let query = p1

    if (ids.length === 0) {
      return true
    }

    for (let id of ids) {
      const finalQuery = idWithQuery(id, query)
      const exists = await Model.exists(finalQuery)
  
      if (!exists) {
        return false
      }
    }
  
    return true    
  }

  async function updateOne(id: Oid, update: Update): Promise<void>
  async function updateOne(query: Query, update: Update): Promise<void>
  async function updateOne(id: Oid, query: Query, update: Update): Promise<void>
  async function updateOne(p0: Oid | Query, p1?: Query | Update, p2?: Update): Promise<void> {
    let id: Oid | undefined
    let query: Query | undefined
    let update: Update | undefined

    if (p0 instanceof Oid) {
      id = p0
      query = p2 ? p1 as Query : undefined
      update = p2 ? p2 : p1 as Update
    } else {
      query = p0
      update = p1 as Update
    }

    const finalQuery = idWithQuery(id, query)

    if (!isEmpty(finalQuery) && !isEmpty(update)) {
      await Model.updateOne(finalQuery, update)
    }
  }

  async function updateMany(ids: Oid[], update: Update): Promise<void>
  async function updateMany(query: Query, update: Update): Promise<void>
  async function updateMany(ids: Oid[], query: Query, update: Update): Promise<void>
  async function updateMany(p0: Oid[] | Query, p1?: Query | Update, p2?: Update): Promise<void> {
    let ids: Oid[] | undefined
    let query: Query | undefined
    let update: Update | undefined

    if (Array.isArray(p0)) {
      ids = p0
      query = p2 ? p1 as Query : undefined
      update = p2 ? p2 : p1 as Update
    } else {
      query = p0
      update = p1 as Update
    }

    const finalQuery = idsWithQuery(ids, query)

    if (!isEmpty(finalQuery) && !isEmpty(update)) {
      await Model.updateMany(finalQuery, update)
    }
  }

  async function hasOneWithError(id: Oid): Promise<true>
  async function hasOneWithError(query: Query): Promise<true>
  async function hasOneWithError(id: Oid, query: Query): Promise<true>
  async function hasOneWithError(p0: Oid | Query, p1?: Query): Promise<true> {
    let id: Oid | undefined
    let query: Query | undefined

    if (p0 instanceof Oid) {
      id = p0
      query = p1
    } else {
      query = p0
    }

    const finalQuery = idWithQuery(id, query)

    if (isEmpty(finalQuery)) {
      throw new Error(`crud/${name}/hasOne: Query should not be empty`)
    }

    const exists = await Model.exists(finalQuery)

    if (exists) {
      return true
    } else {
      throw new Error(`crud/${name}: Document Query(${JSON.stringify(finalQuery, null, 4)}) does not exist`)
    }
  }

  async function hasEachWithError(ids: Oid[]): Promise<true>
  async function hasEachWithError(ids: Oid[], query: Query): Promise<true>
  async function hasEachWithError(p0: Oid[], p1?: Query): Promise<true> {
    let ids = p0
    let query = p1

    if (ids.length === 0) {
      return true
    }

    for (let id of ids) {
      const finalQuery = idWithQuery(id, query)
      const exists = await Model.exists(finalQuery)
  
      if (!exists) {
        throw new Error(`crud/${name}: Document Query(${JSON.stringify(finalQuery, null, 4)}) does not exist`)
      }
    }
  
    return true
  }

  async function findOneWithError(id: Oid): Promise<Document>
  async function findOneWithError(query: Query): Promise<Document>
  async function findOneWithError(id: Oid, query: Query): Promise<Document>
  async function findOneWithError(p0: Oid | Query, p1?: Query): Promise<Document> {
    let id: Oid | undefined
    let query: Query | undefined
  
    if (p0 instanceof Oid) {
      id = p0
      query = p1
    } else {
      query = p1
    }
  
    const finalQuery = idWithQuery(id, query)
  
    if (isEmpty(finalQuery)) {
      throw new Error(`crud/${name}/findOne: Query should not be empty`)
    }
  
    const document = await Model.findOne(finalQuery)
  
    if (document) {
      return document
    } else {
      throw new Error(`crud/${name}: Could not find a document matching Query(${JSON.stringify(finalQuery, null, 4)})`)
    }
  }


  return Object.freeze({
    f: findOne, 
    $f: findOneWithError,
    h: hasOne, 
    $h: hasOneWithError, 
    d: destroyOne, 
    u: updateOne, 
    fm: findMany, 
    dm: destroyMany, 
    he: hasEach, 
    $he: hasEachWithError, 
    um: updateMany,
  })
}

export default Api



