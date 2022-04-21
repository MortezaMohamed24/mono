import Error from "#util/error";
import {Request} from "express";


function on404(req: Request) {
  console.log({bath: req.path});

  throw new Error(404, "Not Found");
}


export default on404;