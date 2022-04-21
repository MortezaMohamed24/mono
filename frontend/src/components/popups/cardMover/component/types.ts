// The `<CardLMover />` uses three `<Selector />` components. one to select a board, 
// one to select a list of that board, and one to select an index in that list.
//
// the following three interfaces represent the options to those `<Selector />` components.

export interface BoardOption {
  /** the id of the board represented by this option */
  id: string;
  /** the title of the board represented by this option possiblity concatenated with ` "(current)"` if it's the board where the source card is */
  name: string;
  /** the title of the board represented by this option */
  label: string;
}

export interface ListOption {
  /** the id of the list represented by this option */
  id: string;
  /** the id of the list represented by this option possiblity concatenated with ` "(current)"` if it's the list where the source card is */
  name: string;
  /** the id of the list represented by this option */
  label: string;
}

// the reason why `name` and `label` are incremented by one is that, unlike us developers,
// users expect the indexes of any indexed thing to start from one not zero, and since these
// fields are to be displayed to the user, they must meet their expectation. 
export interface IndexOption {
  /** the id of the card represented by this option */
  id: string | symbol;
  /** 
   * the index that this option represents plus one and possibliy concatenated 
   * with ` "(current)"` if the selected board is the source card's board and the 
   * selected list is the source card's list and the index represented by this 
   * option is the source card's index in that list. 
  */
  name: string;
  /** 
   * the index that this option represents plus one (because, unlike use developers, 
   * users expecte indexes to start from one, not zero) 
  */
  label: string;
  /** the index represented by this option */
  value: number;
}