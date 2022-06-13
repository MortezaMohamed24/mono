import {Request} from "express";
import {Checkable} from "#util/checker";
import BodyValidator from "./bodyValidator.js";


const OptionalBodyValidator = <Body>(validator?: Checkable<Body>, error: string = "") => (
  validator 
    ? BodyValidator(validator, error) 
    : (request: Request) => {} 
);


export default OptionalBodyValidator;