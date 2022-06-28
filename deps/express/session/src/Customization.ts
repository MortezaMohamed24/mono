import Session from "./Session"


export type Customization = {
  /**
   * This request's `Session` object.
   */
  session: Session
  /**
   * This request's session ID.
   * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
   */
  sessionID: string
}


export default Customization