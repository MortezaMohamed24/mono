import lt from "/features/lists";
import selector from "/components/selector/state";
import {useMemo} from "react";
import {Dispatch} from "/store";
import {useEffect} from "react";
import {ListNative} from "/features/lists/entity";
import {useSelector} from "react-redux";


export interface ListOption {
  /** 
   * The id of the list represented by this option 
  */
  idList: string;
  /**
   * The title of the list represented by this option
  */
  shortName: string;
  /** 
   * The title of the list represented by this option conditionally 
   * postfixed with " (current)" if this is the current list 
  */
  longName: string;
}

export interface Argument {
  dispatch: Dispatch;
  instanceID: string;
  currentList: ListNative | undefined;
}

export function useManageListSelector({dispatch, instanceID: selectorId, currentList}: Argument) {
  const lists = useSelector(
    currentList 
      ? lt.many({idBoard: currentList?.idBoard})
      : () => []
  );

  const [options, current] = useMemo(() => {
    const options = lists.map((list) => ({
      list: list,
      longName: `${list.title}${isCurrentList(list) ? " (current)" : ""}`,
      shortName: list.title,
      isCurrent: isCurrentList(list),
    }));

    
    const current = options.findIndex((option) => option.isCurrent);


    return [options, current];
  }, [
    lists,
    currentList,
  ]);

  const isCurrentList = (list: ListNative) => {
    return (
      currentList
    ) && (
      currentList.id
    ) && (
      list.id
    ) && (
      list.id === currentList.id
    );
  };

  useEffect(() => {
    dispatch(
      selector.create(selectorId, {
        caption: "List",
        options: options,
        selected: current,
        noOptionsMessage: "This board has no lists, create one by clicking on the \"new list\" button",
      })
    );
  });
}