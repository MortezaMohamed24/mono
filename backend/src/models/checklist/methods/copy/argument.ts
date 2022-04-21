import Card from "#models/card/model";


interface ChecklistMethodCopyArgument {
  card: Card;
  title?: string; 
  index?: number;
}


export default ChecklistMethodCopyArgument;