import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: State; 
  }
}

export const NAME = "boardCardCreator";

export type State = BoardCardCreatorState

export type BoardCardCreatorState = {
  isOpen: false;
  index?: number;
  idList?: string; 
  idLabelsChecked?: string[];
} | {
  isOpen: true;
  /** The id of theh list for which the creator should create cards */
  idList: string; 
  /** The index, amongest that list's cards, where the creator should be displayed */
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