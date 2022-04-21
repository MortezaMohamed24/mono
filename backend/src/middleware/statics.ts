import path from "node:path";
import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
import {DIST as FRONTEND} from "#constants/frontend";


const statics = () => (
  (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "GET") { 
      const path = resolve(req.path);

      if (path) {
        res.sendFile(path, (e) => {
          if (e) { next(); }
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
);

const map: [RegExp, string][] = [[
  // if requesting "/"
  /^\/$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/home"
  /^\/home?$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/cards/idCard"
  /^\/cards\/\w+$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/boards/idBoard"
  /^\/boards\/\w+$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/login", "/login/index", or "/login/index.html"
  /^\/login(\/index(\.html)?)?$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/login/error", "/login/error/index", or "/login/error/index.html"
  /^\/login\/error(\/index(\.html)?)?$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/signup", "/signup/index", or "/signup/index.html"
  /^\/signup(\/index(\.html)?)?$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/signup/error", "/signup/error/index", or "/signup/error/index.html"
  /^\/signup\/error(\/index(\.html)?)?$/, 
  path.join(FRONTEND, "/index.html"),
], [
  // if requesting "/main.bundle.js"
  /^\/main\.bundle\.js$/, 
  path.join(FRONTEND, "/main.bundle.js"),
]];

const resolve = (unresolvedPath: string) => {
  for (let item of map) {
    if (item[0].test(unresolvedPath)) {
      return item[1];
    }
  }

  return path.join(FRONTEND, unresolvedPath); 
};


export default statics;