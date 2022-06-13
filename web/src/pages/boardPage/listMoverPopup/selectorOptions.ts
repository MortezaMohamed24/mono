// TODO: Complete writing the spec
/**
 * # SPECIFICATIONS
 * 
 * ## WHAT IS TO BE DONE
 * 
 * The `<BoardListMoverPopup />` should recieved the id of a list to be moved to another position within the 
 * list's owner board or into another board at specified positionat a given index.
 * 
 * 
 * ## TERMINOLOGY
 * 
 * ### List Position
 * A list's position is the index of its id in its owner board's `idLists` array property.
 * 
 * A list's position determines the horizontal position of the list, amongst its sibling lists,
 * when they are displayed together in order (as done in `<BoardPage />`) 
 * 
 * 
 * ### Board List Positions
 * The list-positions of a board are its `idLists` array property. A board's `idLists` property
 * maps the ids of the lists owned by the board to thier indexes (positions) in the board. Here
 * is an example of how it looks like: 

 * ````
 * someBoard.idLists // => ["idOfListA", "idOfListB", ...]
 * ```
 * 
 * ### The To Be Moved List
 * The list to be moved.
 * 
 * 
 * ### The Current Board
 * The board the toBeMovedList is in before it is moved
 * 
 * ### Board Selector
 * A `<Selector />` component used to allow the user to selected the destinationBoard
 * 
 * 
 * ### The Selected/Destination Board
 * The board currently selected by the BoardSelector for the toBeMovedList in/into.
 * By default, this should be the currentBoard.
 * 
 * 
 * - The Represented Board: The board represented by this option.
 * - The Destionation Board: The board in/into which to move the toBeMovedList.
 *   This might be the currentBoard.
 
 * listSelector
 *  * - The Represented List: The list at the represneted-index.
 * - The Represented Index: The index, in the selected-board's `idLists` field, that this option 
 *   represents.
 * - The Intended To Be Moved List: The list that is intended to be move to another index in 
 *   the currentBoard or into another board at another index.
 * - The current index: The toBeMovedList's index in the currentBoard's `idLists` field
 *   before it is moved.
 * 
 * When deciding to move the toBeMovedList, there are two possible scenarios: 
 *   - Moving it to the selectedIndex "IN" the currentBoard
 *   - Moving it "INTO" another board at the selectedIndex
 * 
 * In both cases, we want to know what position are available, in the destinationBoard, 
 * for the toBeMovedList to become at.
 * 
 * In the first scenario, the destinationBoard is the currentBoard. That means it owns 
 * the toBeMovedList.
 * 
 * If the currentBoard has four lists, then its listPositions will look like something like this:  
 * 
 * ```
 * const destinationBoardListPositions = [
 *   0: "idOfListA",
 *   1: "idOfToBeMovedList",
 *   2: "idOfListB",
 *   3: "idOfListC",
 * ]
 * ```
 * 
 * In this case, the listPositions available for the toBeMovedList are four: as many as how many lists in 
 * the currentBoard. Examples of how it can be moved 
 * 
 * * ```
 * // moved to position 3
 * const destinationBoardListPositions = [
 *   0: "idOfListA",
 *   1: "idOfListB",
 *   2: "idOfListC",
 *   3: "idOfToBeMovedList",
 * ]
 * 
 * // then, moved to position 2
 * const destinationBoardListPositions = [
 *   0: "idOfListA",
 *   1: "idOfListB",
 *   2: "idOfToBeMovedList",
 *   3: "idOfListC",
 * ]
 * 
 * // then, moved to position 0
 * const destinationBoardListPositions = [
 *   0: "idOfToBeMovedList",
 *   1: "idOfListA",
 *   2: "idOfListB",
 *   3: "idOfListC",
 * ]
 * ```
 * 
 * The indexes of the selected-board are: 
 *   if the selected-board is currentBoard
 *     they are the indexes of the currentBoard
 *   else
 *    in this case, the toBeMovedList is to be moved "INTO" the selected-board, not "IN" it 
 *     - we to know what how mant indexes (aka, locattions) are available in the selected-board
 *       so as to allow the user to choose at 
 *     - they are the selected-board's list-indexes array with a symbol add to it at the index
 *       specified by the selectedIndex.
 *       
 *       the reason for adding the symbol is that if the selected-board has four lists,
 *       for example, then it will have four indexes: A board's list indexes are as many
 *       as the number of the lists it owns. The to-be-moved-list, in ,this case, is to be
 *       moved "INTO" the selected-board, in other words, the selected-board's lists will
 *       increase by one, meaning they will be five, meaning there will, and thus, should, 
 *       be five indexes, in selected-board, available for the toBeMovedList to
 *       be at. We cannot use the toBeMovedList's id instead of the symbol because 
 *       it's not moved yet, and also, if the code finds a symbol element in the selectedListIndexes 
 *       array, it can assume that it is a preserved index for the list-to-be-moved.
 *   
 *       will be  and so should its list indexes 
 *   
 *       a symbol is 
 *    currentBoard are the indexes of its `idLists` array property

 * 
/**
 * This popup takes the id of a list and allows the user to move to another index 
 * in the same board or into another one.
 * 
 * facts:
 * - the list to move will be called moveable  
 * - `idList` is the id of moveable
 * - a board owns a list by having its id in its `idLists` array property
 * - the `idLists` array property of a board holds all the ids of all the lists the it owns
 * - a list cannot be owned by more than one board at the same time
 * - to move a list from board A to board B is means to stop it being owned by board A and make it owned by board B
 * - `currentBoard` is the board currently owning moveable
 * - `selectedBoard` is the board the user selected to own moveable, but moveable is not yet moved to it
*/


/**
 * ### WHAT
 * 
 * A type definitions for the boardSelector used by the <BoardListMoverPopup /> component.
 * The boardSelector is to select the destinationBoard. 
 * list to.
 * 
 * 
 * ### TERMINOLOGY
 * 
 * - The Current Board: The board the toBeMovedList is in before it is moved
 * - The Selected Board: The board currently selected by the boardSelector to be the 
 *   destinationBoard. By default, this should be the currentBoard.
 * - The Represented Board: The board represented by this option.
 * - The Destionation Board: The board in/into which to move the toBeMovedList.
 *   This might be the currentBoard.
 */
export interface BoardOption {
  /** 
   * The id of the represented board 
  */
  id: string;
  /** 
   * Same as `this.label` but conditionally postfixed with " (current)"
   * if the the represented board is the current board 
  */
  name: string;
  /** 
   * The title of the represented board
   */
  label: string;
}

/**
 * ### WHAT
 * 
 * A type definitions for the indexSelector used by the `<BoardListMoverPopup />` component.
 * The indexSelector is to select the index, within the selected-board's `idLists` field, 
 * at which to move the toBeMovedList
 * 
 * 
 * ### TERMINLOGY
 * 
 * - The Represented List: The list at the represneted-index.
 * - The Represented Index: The index, in the selected-board's `idLists` field, that this option 
 *   represents.
 * - The Intended To Be Moved List: The list that is intended to be move to another index in 
 *   the currentBoard or into another board at another index.
 * - The current index: The toBeMovedList's index in the currentBoard's `idLists` field
 *   before it is moved.
 */
export interface IndexOption {
  /** 
   * - if the selected-board is a board other than the currentBoard and 
   *   the represented-list is the toBeMovedList
   *   - this is a symbol preserving an index for the toBeMovedList in the selected-board
   * - else
   *   - this is the id of the represented-list
   */
  id: string | symbol;
  /**
   * Same as `this.label` but conditioinally postfixed with " (current)"
   * if the represented-list is the toBeMovedList
  */
  name: string;
  /** 
   * Same as `this.value` but intended to by displayed to the user. Unlike us programmers, 
   * users expect indexes to start from one, not, zero. Thus, this should be incremented 
   * by one. This should be stringifed it will only be used in contexts where strings aer expected.
  */
  label: string;
  /**
   * The represented-index. This is only intended to be used by the program and not be displayed to
   * the user (thus, should not be incremented as `this.label` and `this.name`) 
  */
  value: number;
}