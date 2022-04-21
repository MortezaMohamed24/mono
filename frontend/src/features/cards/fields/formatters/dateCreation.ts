import CardBase from "../../entity/base";
import {FINITE} from "/util/checker";
import {MIN_DATE} from "../constants";


const dateCreation = FINITE<CardBase["dateCreation"]>({min: MIN_DATE});


export default dateCreation;