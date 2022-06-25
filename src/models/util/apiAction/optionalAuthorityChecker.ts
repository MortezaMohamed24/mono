import {Request} from "src/packages/express/express"
import AuthorityChecker from "./authorityChecker.js";


const OptionalAuthorityChecker = (shouldBeAuthorized?: boolean) => (
  shouldBeAuthorized 
    ? AuthorityChecker()
    : (request: Request) => {}
);


export default OptionalAuthorityChecker;