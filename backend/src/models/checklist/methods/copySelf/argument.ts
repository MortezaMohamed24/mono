import Card from "#models/card";


interface Argument {
  card: Card; 
  title?: string; 
  index?: number;
}


export default Argument;