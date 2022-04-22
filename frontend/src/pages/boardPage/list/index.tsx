import s from "./style";
import ll from "/features/lists";
import BLCC from "/features/boardListCardCreator";
import Cards from "../listCards";
import React from "react";
import {Toggler} from "/components/popupify";
import TwoModeInput from "/components/twoFacedInput";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {MAX_TITLE_LENGTH} from "/features/lists/fields/constants";
import {MIN_TITLE_LENGTH} from "/features/lists/fields/constants";
import {BOARD_LIST_OPTIONS_POPUP_ID} from "../listOptionsPopup";


interface Props {
  idList: string;
}

const BoardList = React.memo<Props>(({idList}) => {
  const list = useSelector(ll.one({id: idList}));
  const dispatch = useDispatch();
  const cardCreator = useSelector(BLCC.slice); 
  const shouldOpenCardCreator = cardCreator.isOpen && cardCreator.idList === idList;


  function updateTitle(title: string) {
    dispatch(ll.edit({idList, title}));
  }

  function openCardCreator(index: number = Infinity) {
    dispatch(BLCC.open({index, idList}));
  }


  return list ? (
    <article className={s.list}>
      <header>
        <TwoModeInput 
          View="h2"
          value={list.title || "Untitled list"}
          onChange={updateTitle}
          viewClass={s.view}
          inputClass={s.input}
          inputProps={{min: MIN_TITLE_LENGTH, max: MAX_TITLE_LENGTH, required: true}}
        /> 

        <Toggler
          action="toggle"
          target={BOARD_LIST_OPTIONS_POPUP_ID}
          payload={{idList}}
        />
      </header>
  
      <section>
        <Cards  
          idList={idList} 
          idCards={list.idCards} 
          indexOfCardCreator={cardCreator.index}
          shouldRenderCardCreator={shouldOpenCardCreator}
        />
      </section>

      {shouldOpenCardCreator
        ? null
        : <button 
            onClick={() => openCardCreator(Infinity)} 
            children="Add a card" 
          />
      }
    </article>
  ) : null;
});


export default BoardList;