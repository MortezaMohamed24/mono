import {EventEmitter} from "node:events"


export declare abstract class Store extends EventEmitter {
  regenerate(req: express.Request, callback: (err?: any) => any): void
  load(sid: string, callback: (err: any, session?: SessionData) => any): void
  createSession(req: express.Request, session: SessionData): void

  /**
   * Gets the session from the store given a session ID and passes it to `callback`.
   *
   * The `session` argument should be a `Session` object if found, otherwise `null` or `undefined` if the session was not found and there was no error.
   * A special case is made when `error.code === "ENOENT'` to act like `callback(null, null)`.
   */
  abstract get(sid: string, callback: (err: any, session?: SessionData | null) => void): void

  /** Upsert a session in the store given a session ID and `SessionData` */
  abstract set(sid: string, session: SessionData, callback?: (err?: any) => void): void

  /** Destroys the dession with the given session ID. */
  abstract destroy(sid: string, callback?: (err?: any) => void): void

  /** Returns all sessions in the store */
  // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38783, https://github.com/expressjs/session/pull/700#issuecomment-540855551
  all?(callback: (err: any, obj?: SessionData[] | { [sid: string]: SessionData } | null) => void): void

  /** Returns the amount of sessions in the store. */
  length?(callback: (err: any, length: number) => void): void

  /** Delete all sessions from the store. */
  clear?(callback?: (err?: any) => void): void

  /** "Touches" a given session, resetting the idle timer. */
  touch?(sid: string, session: SessionData, callback?: () => void): void
}


export default Store