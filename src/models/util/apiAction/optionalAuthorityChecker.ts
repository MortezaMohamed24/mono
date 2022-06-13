import {Request} from "express"
import AuthorityChecker from "./authorityChecker.js";


const OptionalAuthorityChecker = (shouldBeAuthorized?: boolean) => (
  shouldBeAuthorized 
    ? AuthorityChecker()
    : (request: Request) => {}
);


export default OptionalAuthorityChecker;