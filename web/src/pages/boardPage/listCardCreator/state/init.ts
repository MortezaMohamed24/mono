import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: State; 
  }
}

export const NAME = "boardCardCreator";

export type State = BoardCardCreatorState

export type BoardCardCreatorState = {
  /** 
   * Whether the card creator is open.
  */
  isOpen: false;
  index?: undefined;
  idList?: undefined; 
  idLabelsChecked?: undefined;
} | {
  /** 
   * Whether the card creator is open.
  */
  isOpen: true;
  /** 
   * The id of the list for which the creator should create cards.
   * The card creator should be displayed among this list's cards.
  */
  idList: string; 
  /** 
   * The index, among that `this.idList`'s cards, where the creator should be displayed.
  */
  index: number;
  /** 
   * The ids of the labels to add to the card to create. This field is set 
   * by the `CardCreatorLabeler` popup
  */
  idLabelsChecked: string[];
}


useSlice(NAME, () => ({
  isOpen: false,
}));