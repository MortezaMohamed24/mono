import s from "./style";
import stop from "/util/event/stop";
import React from "react";
import selector from "./state";
import {useState} from "react";
import {useEffect} from "react";
import classNames from "classnames";
import typeography from "/style/typeography/style";
import * as POPUPIFY from "/components/popupify";
import {useDispatch} from "/store";
import {useSelector} from "/store";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";
import {ID as OPTIONS_POPUP_ID} from "./optionsPopup";


interface Props {
  zIndex?: undefined | number;
  classname?: undefined | string;
  instanceID: string;
  [otherKeys: string | number | symbol]: unknown;
}

function Selector({zIndex, classname, instanceID, ...rest}: Props) {
  /** The id of this instance of this component */
  const data = useSelector(selector.selectInstance(instanceID));
  const caption = data?.caption;
  const selected = data?.options[data.selected];
  const dispatch = useDispatch();
  const classnames = classNames(classname, s.dropselect);
  const [wrapper, setWrapper] = useState<null | HTMLElement>(null); 


  function openOptionsPopup() {
    dispatch(
      POPUPIFY.open({
        id: OPTIONS_POPUP_ID, 
        zIndex: zIndex,
        payload: {id: instanceID},
        reference: `#${instanceID}`,
      })
    );
  }

  function closeOptionsPopup() {
    dispatch(
      POPUPIFY.close({
        id: OPTIONS_POPUP_ID,
      })
    );
  }

  function toggleOptionsPopup() {
    dispatch(
      POPUPIFY.toggle({
        id: OPTIONS_POPUP_ID, 
        zIndex: zIndex,
        payload: {id: instanceID},
        reference: `#${instanceID}`,
      })
    );
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      openOptionsPopup();
      stop(event);
    } else if (event.key === "Escape") {
      closeOptionsPopup();
      stop(event);
    }
  }

  function deleteInstance() {
    dispatch(selector.delete(instanceID));
  }


  useOnOuterClick(wrapper, closeOptionsPopup);


  useEffect(() => () => {
    deleteInstance();
    closeOptionsPopup();
  });


  return (
    <article {...rest} ref={setWrapper} onClick={toggleOptionsPopup} onKeyDown={onKeyDown} className={classnames}>
      <p className={`${typeography.text} ${typeography.sm}`}>
        {caption}
      </p>

      <p className={`${typeography.text} ${typeography.md}`}>
        {selected?.shortName}
      </p>

      <button type="button" />
    </article>
  );
}


export {Props, Selector};
export default React.memo(Selector);