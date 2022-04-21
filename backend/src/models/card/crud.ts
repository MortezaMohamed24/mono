import crud from "#models/util/crud";
import Card from "#models/card/model";
import CardMethods from "#models/card/methods/type";
import CardVirtuals from "#models/card/virtuals/type";
import {CardDocumentType} from "#models/card/document";


const cd = crud<CardMethods, CardVirtuals, CardDocumentType>("card", Card);


export default cd;