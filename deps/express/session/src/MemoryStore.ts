import {Store} from "./Store.js" 
import {SessionData} from "./SessionData.js"


/**
 * **Warning:** the default server-side session storage, `MemoryStore`, is purposely not designed for a production environment.
 * It will leak memory under most conditions, does not scale past a single process, and is only meant for debugging and developing.
*/
export declare class MemoryStore extends Store {
  get(sid: string, callback: (err: any, session?: SessionData | null) => void): void
  set(sid: string, session: SessionData, callback?: (err?: any) => void): void
  destroy(sid: string, callback?: (err?: any) => void): void

  all(callback: (err: any, obj?: { [sid: string]: SessionData } | null) => void): void
  length(callback: (err: any, length: number) => void): void
  clear(callback?: (err?: any) => void): void
  touch(sid: string, session: SessionData, callback?: () => void): void
}


export default MemoryStore