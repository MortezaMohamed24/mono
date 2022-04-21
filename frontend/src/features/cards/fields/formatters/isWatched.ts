import CardBase from "../../entity/base";
import {BOOLEAN} from "/util/checker";


const isWatched = BOOLEAN<CardBase["isWatched"]>({});


export default isWatched;