export enum Errors {
  /**
   * URL was invalid.
  */
  URL = "URL",
  /** 
   * Response body is not in a valid formate.
   */
  BODY = "BODY",
  /** 
   * An error occured on the server (500).
   */
  SERVER = "SERVER",
  /** 
   * Client is offline. 
   */
  OFFLINE = "OFFLINE",
  /** 
   * Could not establish a connection although client is 
   * online, possibly becuase a proxy or firewall is preventing 
   * the connection or because the server is shut down.
   */
  CONNECTION = "CONNECTION",
  /**
   * Any unknown error.
   */
  UNRECOGNIZED = "UNRECOGNIZED",
  /**
   * User is unauthorized (401).
   */
  UNAUTHORIZED = "UNAUTHORIZED",
}