import s from "./style";
import ct from "/checklists";
import btn from "/style/button/style";
import List from "./list";
import React from "react";
import Progress from "./progress";
import {Toggler} from "/components/popupify";
import ItemCreator from "./checkitemCreator";
import TwoModeInput from "/components/twoFacedInput";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MAX_TITLE_LENGTH} from "/checklists/fields/constants";
import {MIN_TITLE_LENGTH} from "/checklists/fields/constants";
import {CHECKLIST_OPTIONS_POPUP_ID} from "./popups/checklistOptions";


interface Props {
  idChecklist: string;
}


const Checklist = ({idChecklist}: Props) => {
  const dispatch = useDispatch();
  const checklist = useSelector(ct.one({id: idChecklist}));

  
  function updateTitle(newTitle: string) {
    if (checklist) {
      dispatch(ct.edit({title: newTitle, idChecklist: idChecklist}));
    }
  }


  return checklist ? (
    <article className={s.checklist}>
      <header>
        <div className={s.icon} />

        <TwoModeInput 
          View="h3"
          value={checklist.title || "Unkown title"} 
          onChange={updateTitle}
          viewClass={s.title}
          inputClass={s.input}
          inputProps={{
            min: MIN_TITLE_LENGTH,
            max: MAX_TITLE_LENGTH,
            required: true, 
          }}
        />

        <Toggler 
          target={CHECKLIST_OPTIONS_POPUP_ID}
          payload={{idChecklist}}
          children="Options"
          reference="this"
          className={`${s.options} ${btn.gray}`}
        />

      </header>

      <Progress 
        idChecklist={idChecklist}
      />

      <List 
        filter={checklist.filter}
        idCheckitems={checklist.idCheckitems} 
      />

      <ItemCreator 
        idChecklist={idChecklist} 
      />
    </article>
  ) : null;
};


export default Checklist;