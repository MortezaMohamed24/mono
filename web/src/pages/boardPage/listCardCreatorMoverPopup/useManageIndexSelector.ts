import selector from "/components/selector/state";
import {useMemo} from "react";
import {Dispatch} from "/store";
import {useEffect} from "react";
import {ListNative} from "/features/lists/entity";


export interface IndexOption {
  /** 
   * The id of the card at this index, or a symble, if 
   * the card creator is currentlt open at this index. 
  */
  id: string | symbol;
  /**
   * The number of this index.
  */
  value: number;
  /**
   * Same as `this.value` but is meant to by displayed to the user. 
   * Users expect indexes to start from one, not zero, this field 
   * should be incremented by one.
  */
  shortName: string;
  /**
   * Same as `this.shortName`, but conditionally postfixed with " (current)" if 
   * the card creator is open and at this index. 
  */
  longName: string;
}

export interface UseManageIndexSelectorArgument {
  dispatch: Dispatch;
  instanceId: string;
  currentList: ListNative | undefined;
  currentIndex: number | undefined;
  selectedList: ListNative | undefined;
}

export function useManageIndexSelector({dispatch, instanceId, currentList, currentIndex, selectedList}: UseManageIndexSelectorArgument) {
  const [options, current] = useMemo(() => {
    const indexes: (string | symbol)[] = [];

    if (currentList && selectedList && typeof currentIndex === "number") {
      if (selectedList.id === currentList.id) {
        indexes.push(...selectedList.idCards);
      } else {
        indexes.push(...selectedList.idCards);
        indexes.splice(currentIndex, 0, Symbol());
      }
    }


    const options = indexes.map(
      (idCard, index) => ({
        value: index,
        longName: `${index + 1}${typeof idCard === "symbol" ? " (current)" : ""}`,
        shortName: String(index + 1),
        isCurrent: typeof idCard === "symbol",
      })
    );


    const current = options.findIndex(option => option.isCurrent);


    return [options, current];
  }, [
    currentList,
    selectedList,
  ]);


  useEffect(() => {
    dispatch(
      selector.create(instanceId, {
        options: options,
        caption: "Index",
        selected: current,
        noOptionsMessage: "This List Has no Cards. To Create Some, Click on the \"Create Card\" button at the Bottom of the List ",
      })
    );
  });


  useEffect(() => {
    dispatch(
      selector.edit(instanceId, {
        options: options,
        selected: current,
      })
    );
  }, [
    options
  ]);
}