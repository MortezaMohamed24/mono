import lt from "/features/lists";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import React from "react";
import selector from "/components/selector/state";
import popupify from "/components/popupify";
import Selector from "/components/selector/component";
import useSafeID from "/util/react/hooks/useSafeID";
import cardCreator from "../listCardCreator/state";
import {ID} from "./constants";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useDispatch} from "/store";
import {useSelector} from "/store";
import {ListOption} from "./useManageListSelector";
import {IndexOption} from "./useManageIndexSelector";
import {useManageListSelector} from "./useManageListSelector";
import {useManageIndexSelector} from "./useManageIndexSelector";

 
const BoardListCardCreatorMoverPopup = popupify(ID, () => {
  const listSelectorID = useSafeID();
  const indexSelectorID = useSafeID();
  const selectedListOption = useSelector(selector.selectSelectedOption<ListOption>(listSelectorID));
  const selectedIndexOption = useSelector(selector.selectSelectedOption<IndexOption>(indexSelectorID));


  /** 
   * The expected-to-be-open card creator 
  */
  const cardCreatorData = useSelector(cardCreator.selectState);
  /** 
   * The id of the list that the card creator is currently set to create cards for
  */
  const currentListId = cardCreatorData.idList;
  /**
   * The index of the card creator in the current list
  */
  const currentIndex = cardCreatorData.index;
  /**
   * The list for which `card_creator` should create cards. 
   */
  const currentList = useSelector(
    currentListId
      ? lt.one(currentListId) 
      : () => undefined,
  );
  /**
   * The currently selected list to be the current list
  */
  const selectedList = useSelector(
    selectedListOption
      ? lt.one(selectedListOption.idList)
      : () => undefined
  );


  const dispatch = useDispatch();


  useManageListSelector({
    dispatch: dispatch, 
    instanceID: listSelectorID,
    currentList: currentList, 
  });

  useManageIndexSelector({
    dispatch: dispatch,
    instanceId: indexSelectorID,
    currentList: currentList,
    currentIndex: currentIndex,
    selectedList: selectedList,
  });


  function commit() {
    if (selectedListOption && selectedIndexOption) {
      dispatch(
        cardCreator.move({
          index: selectedIndexOption.value,
          idList: selectedListOption.idList,
        })
      );
    }
  }


  /**
   * It is an error if this popup is opened while: 
   *   - there is no open board.
   *   - the <CardCreator /> component is not open
   *   - the list in which the <CardCreator /> is displayed not found.
  */
  if (!currentList || !cardCreatorData.isOpen) {
    return (
      <>
        <Header title="Labels" />
        
        <section className={ps.body}>
          <p>Unexpected Error Occoured.</p>
          <p>Please Reloading The Page.</p>
        </section>      

        <footer className={ps.footer}>
          <Toggler 
            action="close"
            children="Close"
            className={`${btn.gray} ${btn.block}`}
          />
        </footer>
      </>
    );
  }
 

  return (
    <>
      <Header title="Select position" />

      <section className={ps.body}>
        <Selector instanceID={listSelectorID} />
        <Selector instanceID={indexSelectorID} />
      </section>

      <footer className={ps.footer}>
        <Toggler
          action="close"
          onClick={commit}
          disabled={!selectedListOption || !selectedIndexOption}
          children="Select"
          className={btn.blue}
        />
      </footer>
    </>
  );
});


export default BoardListCardCreatorMoverPopup;