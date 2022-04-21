import CardBase from "../../entity/base";
import {BOOLEAN} from "/util/checker";


const isComplete = BOOLEAN<CardBase["isComplete"]>({});


export default isComplete;