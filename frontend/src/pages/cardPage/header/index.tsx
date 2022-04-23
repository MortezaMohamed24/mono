import s from "./style";
import lt from "/features/lists";
import cd from "/features/cards";
import React from "react";
import typeography from "/style/typeography/style";
import TwoFacedInput from "/components/twoFacedInput";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MAX_TITLE_LENGTH} from "/features/cards/fields/constants";
import {MIN_TITLE_LENGTH} from "/features/cards/fields/constants";
import {CARD_MOVER_POPUP_ID} from "/components/cardMoverPopup";

import * as POPUPIFY from "/components/popupify";
import * as MODULIFY from "/components/modulify";


const Header = React.memo(() => {
  const card = useSelector(cd.opened);
  const dispatch = useDispatch();
  const titleOfList = useSelector(lt.one.title({id: card.idList}));


  function updateTitle(newTitle: string) {
    dispatch(cd.edit({idCard: card.id, title: newTitle}));
  }


  return (
    <header className={s.header}>
      <div className={s.icon} />

      <TwoFacedInput 
        View="h2"
        value={card.title}
        onChange={updateTitle}
        viewClass={s.title}
        inputClass={s.input}
        inputProps={{ 
          min: MIN_TITLE_LENGTH, 
          max: MAX_TITLE_LENGTH, 
          required: true,
        }}
      />

      <POPUPIFY.Toggler
        action="toggle"
        target={CARD_MOVER_POPUP_ID}
        zIndex={50}
        payload={{idCard: card.id}}
        children={`In list: ${titleOfList}`}
        reference="this"
        className={`${s.mover} ${typeography.link}`}
      />

      <MODULIFY.Toggler 
        action="close" 
        className={s.closer} 
      />
    </header>
  );
});


export default Header;