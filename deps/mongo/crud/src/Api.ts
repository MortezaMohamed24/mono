import {Oid} from "oid"
import {Model} from "mongoose"
import {isEmpty} from "./isEmpty.js"
import {Querify} from "./Querify.js"
import {Updatify} from "./Updatify.js"
import {Document} from "mongoose"
import {idWithQuery} from "./idWithQuery.js"
import {idsWithQuery} from "./idsWithQuery.js"


export function CRUD<Methods extends object, DocumentType extends object>(Model: Model<DocumentType, {}, Methods>): Readonly<{
  f: {
      (id: Oid): Promise<(Document<any, any, any> & DocumentType & Methods) | null>;
      (query: Querify<DocumentType>): Promise<(Document<any, any, any> & DocumentType & Methods) | null>;
      (id: Oid, query: Querify<DocumentType>): Promise<(Document<any, any, any> & DocumentType & Methods) | null>;
  };
  h: {
      (id: Oid): Promise<boolean>;
      (query: Querify<DocumentType>): Promise<boolean>;
      (id: Oid, query: Querify<DocumentType>): Promise<boolean>;
  };
  d: {
      (id: Oid): Promise<void>;
      (query: Querify<DocumentType>): Promise<void>;
      (id: Oid, query: Querify<DocumentType>): Promise<void>;
  };
  u: {
      (id: Oid, update: Updatify<DocumentType>): Promise<void>;
      (query: Querify<DocumentType>, update: Updatify<DocumentType>): Promise<void>;
      (id: Oid, query: Querify<DocumentType>, update: Updatify<DocumentType>): Promise<void>;
  };
  fm: {
      (p0: Oid[]): Promise<(Document<any, any, any> & DocumentType & Methods)[]>;
      (p0: Querify<DocumentType>): Promise<(Document<any, any, any> & DocumentType & Methods)[]>;
      (p0: Oid[], p1: Querify<DocumentType>): Promise<(Document<any, any, any> & DocumentType & Methods)[]>;
  };
  dm: {
      (ids: Oid[]): Promise<void>;
      (query: Querify<DocumentType>): Promise<void>;
      (ids: Oid[], query: Querify<DocumentType>): Promise<void>;
  };
  he: {
      (ids: Oid[]): Promise<boolean>;
      (ids: Oid[], query: Querify<DocumentType>): Promise<boolean>;
  };
  um: {
      (ids: Oid[], update: Updatify<DocumentType>): Promise<void>;
      (query: Querify<DocumentType>, update: Updatify<DocumentType>): Promise<void>;
      (ids: Oid[], query: Querify<DocumentType>, update: Updatify<DocumentType>): Promise<void>;
  };
}> {
  type Doc = Document & DocumentType & Methods
  type Query = Querify<DocumentType>
  type Update = Updatify<DocumentType>


  async function findOne(id: Oid): Promise<null | Doc>
  async function findOne(query: Query): Promise<null | Doc>
  async function findOne(id: Oid, query: Query): Promise<null | Doc>
  async function findOne(p0: Oid | Query, p1?: Query): Promise<null | Doc> {
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
  
  async function findMany(p0: Oid[]): Promise<Doc[]>
  async function findMany(p0: Query): Promise<Doc[]>
  async function findMany(p0: Oid[], p1: Query): Promise<Doc[]>
  async function findMany(p0: Oid[] | Query, p1?: Query): Promise<Doc[]> {
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

    const documents: Doc[] = await Promise.all([...await Model.find(finalQuery)])

    if (!ids) {
      return documents
    }

    const sorted: Doc[] = []

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


  return Object.freeze({
    f: findOne, 
    h: hasOne, 
    d: destroyOne, 
    u: updateOne, 
    fm: findMany, 
    dm: destroyMany, 
    he: hasEach, 
    um: updateMany,
  })
}


export default CRUD