import s from "./style";
import bd from "/boards";
import ll from "/labels";
import btn from "/style/button/style";
import React from "react";
import tabify from "../../tabify";
import {TABS} from "../../manager";
import {search} from "/labels/util";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import InputDeferer from "/components/inputDeferer";
import {useSelector} from "react-redux";
import {InputDefererMeta} from "/components/inputDeferer";
import {LABEL_EDITOR_POPUP_ID} from "/popups/labelEditor";
import {LABEL_CREATOR_POPUP_ID} from "/popups/labelCreator";


const ID = Symbol("board-right-hand-side-menu-labels-tab");
const TITLE = "Labels";


const LabelsTab = tabify({id: ID, title: TITLE, Component: () => {  
  const [input] = useState<InputDefererMeta>({});
  const [query, setQuery] = useState("");  
  
  const allLabels = useSelector(ll.many({idBoard: useSelector(bd.opened.id)}));
  const labelsMatchingQuery = query ? search(query, allLabels) : allLabels; 


  useEffect(() => {
    input.focus?.();
  }, []);


  return (
    <div className={s.labels}>
      <InputDeferer
        meta={input}
        value={query}
        styled={true}
        onValue={(value) => setQuery(value)}
        placeholder="Search labels..."
      />

      <ul>
        {labelsMatchingQuery.map(({ id, name, color }) => 
          <li key={id}>
            <Toggler 
              action="forward"
              target={LABEL_EDITOR_POPUP_ID}
              payload={id}
              children={"Edit"}
              className={s[color]}
            />

            <Toggler
              action="forward"
              target={LABEL_EDITOR_POPUP_ID}
              payload={id}
            />
          </li>
        )}
      </ul>
    
      <br />

      <Toggler 
        action="forward"
        target={LABEL_CREATOR_POPUP_ID}
        children="Create a new label"
        className={`${btn.gray} ${btn.block}`}
      />
    </div>
  );
}});


TABS.push({
  id: ID, 
  Component: LabelsTab,
});


export {
  ID as ID,
  ID as LABELS_TAB_ID,
  LabelsTab as default,
  LabelsTab as LabelsTab,
};