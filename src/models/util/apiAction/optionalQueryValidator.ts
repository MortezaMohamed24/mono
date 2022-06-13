import {Request} from "express";
import {Checkable} from "#util/checker";
import QueryValidator from "./queryValidator.js";


const OptionalQueryValidator = <Query>(validator?: Checkable<Query>, error: string = "") => (
  validator 
    ? QueryValidator(validator, error) 
    : (request: Request) => {} 
);


export default OptionalQueryValidator;