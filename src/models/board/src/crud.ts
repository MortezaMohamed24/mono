import {Document} from "mongoose"
import { Oid } from "oid"
import {Updatify} from "crud"
import {Querify} from "crud"
import CRUD from "crud"
import {Board} from "./Model.js"
import {BoardMethods} from "./Methods.js"
import {BoardDocumentType} from "./DocumentType.js"


export const {
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
} = (
  CRUD<BoardMethods, BoardDocumentType>(Board) as Readonly<{
    f: {
        (id: Oid): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods) | null>;
        (query: Querify<BoardDocumentType>): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods) | null>;
        (id: Oid, query: Querify<BoardDocumentType>): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods) | null>;
    };
    h: {
        (id: Oid): Promise<boolean>;
        (query: Querify<BoardDocumentType>): Promise<boolean>;
        (id: Oid, query: Querify<BoardDocumentType>): Promise<boolean>;
    };
    d: {
        (id: Oid): Promise<void>;
        (query: Querify<BoardDocumentType>): Promise<void>;
        (id: Oid, query: Querify<BoardDocumentType>): Promise<void>;
    };
    u: {
        (id: Oid, update: Updatify<BoardDocumentType>): Promise<void>;
        (query: Querify<BoardDocumentType>, update: Updatify<BoardDocumentType>): Promise<void>;
        (id: Oid, query: Querify<BoardDocumentType>, update: Updatify<BoardDocumentType>): Promise<void>;
    };
    fm: {
        (p0: Oid[]): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods)[]>;
        (p0: Querify<BoardDocumentType>): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods)[]>;
        (p0: Oid[], p1: Querify<BoardDocumentType>): Promise<(Document<any, any, any> & BoardDocumentType & BoardMethods)[]>;
    };
    dm: {
        (ids: Oid[]): Promise<void>;
        (query: Querify<BoardDocumentType>): Promise<void>;
        (ids: Oid[], query: Querify<BoardDocumentType>): Promise<void>;
    };
    he: {
        (ids: Oid[]): Promise<boolean>;
        (ids: Oid[], query: Querify<BoardDocumentType>): Promise<boolean>;
    };
    um: {
        (ids: Oid[], update: Updatify<BoardDocumentType>): Promise<void>;
        (query: Querify<BoardDocumentType>, update: Updatify<BoardDocumentType>): Promise<void>;
        (ids: Oid[], query: Querify<BoardDocumentType>, update: Updatify<BoardDocumentType>): Promise<void>;
    };
  }>
)


export default Object.freeze({
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
})

f({})