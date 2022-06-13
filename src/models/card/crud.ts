import crud from "src/models/util/crud";
import Card from "src/models/card/model";
import CardMethods from "src/models/card/methods/type";
import CardVirtuals from "src/models/card/virtuals/type";
import {CardDocumentType} from "src/models/card/document";


const cd = crud<CardMethods, CardVirtuals, CardDocumentType>("card", Card);


export default cd;