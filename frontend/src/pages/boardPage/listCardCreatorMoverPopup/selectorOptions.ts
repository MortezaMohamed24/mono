/*
 * This module exports option types required by the <Selector /> component
 * used by the <BoardListCardCreatorPopup /> component
*/


export interface ListOption {
  /** 
   * The id of the list represented by this option 
  */
  id: string;
  /** 
   * The title of the list represented by this option conditionally 
   * postfixed with " (current)" if this is theh current list 
  */
  name: string;
  /**
   * The title of the list represented by this option
  */
  label: string;
}

export interface IndexOption {
  /** 
   * The id of the card at the index represented by this option, 
   * or a symbol if this index is preserved for a card yet to be created 
  */
  id: string | symbol;
  /**
   * Same as `this.label`, but conditionally postfixed with " (current)" if 
   * this is the index preserved for the card to create. 
  */
  name: string;
  /**
   * The the number of this index to be displayed to the user. 
   * Since user, unlike us programmers, expect indexes to start from one, 
   * not zero, this field should be incremented by one.
  */
  label: string;
  /**
   * The number of this index. This is meant to be used by the program and 
   * not displayed to the user, and, thus, not incremented by one.
  */
  value: number;
}