import s from "./style";
import ll from "/labels";
import cd from "/cards";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import React from "react";
import search from "/labels/util/search";
import popupify from "/components/popupify";
import classNames from "classnames";

import {ID} from "./constants";
import {Header} from "/components/popupify";
import {useRef} from "react";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {LABEL_EDITOR_ID} from "/popups/labelEditor";
import {LABEL_CREATOR_ID} from "/popups/labelCreator";

import * as INPUT from "/components/inputDeferer";


const AutoLabelsListPopup = popupify(ID, ({payload: {idCard}, reference}) => {
  const card = useSelector(cd.one({id: idCard}));

  const query = useRef<INPUT.Meta>({}).current;
  const [queryValue, setQueryValue] = useState<string>("");  

  const checked = useSelector(ll.many({id: card ? card.idLabels : []}));
  const filtered = search(queryValue, checked);
  const dispatch = useDispatch();
  
  
  function check(idLabel: string) {
    dispatch(cd.label({idCard, idLabel}));
  }
  
  function toggle(idLabel: string) {
    isChecked(idLabel) ? check(idLabel) : uncheck(idLabel);
  }
  
  function uncheck(idLabel: string) {
    dispatch(cd.unlabel({idCard, idLabel}));
  }

  function isChecked(idLabel: string) {
    return !!checked.find(label => label.id === idLabel);
  }
  
  
  useEffect(() => {
    query.focus?.();
  }, []);


  return (
    <>
      <Header title="Labels" />
      
      <section className={`${ps.body} ${s.body}`}>
        <INPUT.InputDeferer
          meta={query}
          value={queryValue}
          styled={true}
          onValue={setQueryValue}
          placeholder="Search labels..."
        />

        <ul>
          {filtered.map(({id, name, color}) => 
            <li key={id}>
              <button 
                onClick={() => toggle(id)}
                children={name}
                className={classNames(s.label, s[color], {[s.selected]: isChecked(id)})}
              />

              <Toggler
                action="forward"
                target={LABEL_EDITOR_ID}
                payload={id}
                reference={reference}
                className={s.edit}
              />
            </li>
          )}
        </ul>
      </section>

      <footer className={ps.footer}>
        <Toggler 
          action="forward"
          target={LABEL_CREATOR_ID}
          reference={reference}
          children="Create a new label"
          className={`${btn.gray} ${btn.block}`}
        />
      </footer>
    </>
  );
});


export default AutoLabelsListPopup;