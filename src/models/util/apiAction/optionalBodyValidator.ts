import {Request} from "src/packages/express/express";
import {Checkable} from "#util/checker";
import BodyFormatter from "./bodyValidator.js";


const OptionalBodyValidator = <Body>(validator?: Checkable<Body>, error: string = "") => (
  validator 
    ? BodyFormatter(validator, error) 
    : (request: Request) => {} 
);


export default OptionalBodyValidator;