import {URL} from "node:url";
import Error from "#util/error";
import {Request} from "express";
import {INVALID} from "#util/checker";
import {Checkable} from "#util/checker";


const QueryValidator = <Query>(checkable: Checkable<Query>, error: string) => (
  (request: Request) => {
    try {
      let query: string;

      query = new URL(request.url, `http://${request.headers.host}`).search;
      query = query.slice(1);    // remove the "?" that precedes each search query search
      query = decodeURI(query);  // if `search` has any URL-specific escapes, convert them to normal characters
      query = JSON.parse(query);

      const output = checkable.check(query);
      
      if (output === INVALID) {
        throw "error";
      }
  
      return output;
    }

    catch {
      throw new Error(400, error);
    }
  }
);


export default QueryValidator;