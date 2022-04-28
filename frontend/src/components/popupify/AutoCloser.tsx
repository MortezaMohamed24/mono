import React from "react";
import state from "./state";
import pathOf from "/util/event/outerPathOf";
import {useEffect} from "react";
import {useSelector} from "/store";
import {useDispatch} from "/store";
import {useListener} from "/util/hooks/useListener";
import {TOGGLER_TYPE_ID} from "./toggler";


export const PopupAutoCloser = React.memo<{}>(() => {
  const entry = useSelector(({popups}) => popups.history.last);
  const length = useSelector(({popups}) => popups.history.length);
  const dispatch = useDispatch();


  const autoClose = useListener<MouseEvent>((event) => {
    // if history is empty, then there are not popups to auto-close
    if(!entry) { 
      return; 
    }
    
    // if the click landed on a <PopupToggler />, do nothing and let
    // the <PopupToggler /> handle it.
    if ((
      event.target instanceof Element
    ) && (
      event.target?.getAttribute?.("data-type") === TOGGLER_TYPE_ID
    )) {
      return; 
    }
  
    // if it landed elsewhere in the popup that `entry` represents, 
    // do nothing since a popup should be auto-closed only when 
    // a click lands outside it.
    if (pathOf(event).find((node) => node.getAttribute("data-id") === entry.id)) {
      return;
    }
  
    // Now we are sure the click landed outside of the popup
    // on a non <PopupToggler /> node.
    dispatch(state.close({
      id: entry.id,
    }));
  });


  useEffect(() => {
    length > 0 
      ? window.addEventListener("click", autoClose)
      : window.removeEventListener("click", autoClose);
  }, [
    length,
  ]);


  return null;
});