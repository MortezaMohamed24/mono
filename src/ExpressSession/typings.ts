import type {Oid} from "oid"


declare global {
  export namespace session {
    export interface SessionData {
      userID?: Oid | undefined
    }
  }
}