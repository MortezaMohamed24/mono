import "./types";

import s from "./style";
import bd from "/features/boards";
import ll from "/features/labels";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import BLCC from "../listCardCreator/state";
import React from "react";
import search from "/features/labels/util/search";
import popupify from "/components/popupify";
import classNames from "classnames";
import DeepEquals from "/util/object/deepEquals";

import {ID} from "./constants";
import {useRef} from "react";
import {Header} from "/components/popupify";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "/store";
import {LabelNative} from "/features/labels/entity";
import {useDispatch} from "/store";

import * as INPUT from "/components/inputDeferer";
import * as EDITOR from "/components/labelEditorPopup";
import * as CREATOR from "/components/labelCreatorPopup";


const equal = DeepEquals<LabelNative[]>(1);


const BoardListCardCreatorLabelerPopup = popupify<ID, {}>(ID, ({reference}) => {
  const state = useSelector(({boardCardCreator}) => boardCardCreator);
  const input = useRef<INPUT.Meta>({}).current;
  const board = useSelector(bd.opened);

  const [query, setQuery] = useState<string>("");

  const ids = board ? board.idLabels : [];
  const entities = useSelector(ll.many({id: ids}), equal);
  const searched = search(query, entities);

  const dispatch = useDispatch();


  /**
   * it is an error for this popup to be opened while: 
   *   - there is no open board
   *   - the <CardCreator /> Component is closed
   */
  if (!state.isOpen || !board) {
    return (
      <>
        <Header title="Labels" />
        
        <section className={`${ps.body} ${s.body}`}>
          {!board
            ? <>
                <p>Unexpected error occoured: No board is currently open</p>
                <p>Try reloading the page.</p>
              </> 
            : <>
                <p>Unexpected error occoured: The card creator is not open.</p>
                <p>Try reloading the page.</p>
              </>
          }
        </section>      

        <footer className={ps.footer}>
          <Toggler 
            action="close"
            target={CREATOR.ID}
            children="Close"
            className={`${btn.gray} ${btn.block}`}
            reference={reference}
          />
        </footer>
      </>
    );
  }


  const toggle = (id: string) => {
    dispatch(BLCC.toggle(id));
  }
  
  const isChecked = (id: string) => {
    return state.idLabelsChecked.includes(id);
  }


  useEffect(() => {
    input.focus?.();
  }, []);


  return (
    <>
      <Header title="Labels" />
      
      <section className={`${ps.body} ${s.body}`}>
        <INPUT.default
          meta={input}
          value={query}
          styled={true}
          onValue={setQuery}
          placeholder="Search labels..."
        />

        <ul>
          {searched.map(({id, name, color}) => 
            <li key={id}>
              <button 
                onClick={() => toggle(id)}
                children={name}
                className={classNames(s.label, s[color], {[s.selected]: isChecked(id)})}
              />

              <Toggler
                action="forward"
                target={EDITOR.ID}
                payload={id}
                className={s.edit}
                reference={reference}
              />
            </li>
          )}
        </ul>
      </section>      

      <footer className={ps.footer}>
        <Toggler 
          action="close"
          target={CREATOR.ID}
          children="Create a new label"
          className={`${btn.gray} ${btn.block}`}
          reference={reference}
        />
      </footer>
    </>
  );
});



export default BoardListCardCreatorLabelerPopup;