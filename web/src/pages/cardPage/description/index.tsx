import s from "./style";
import cd from "/features/cards";
import btn from "/style/button/style";
import icon from "/style/icon/style";
import stop from "/util/event/stop";
import React from "react";
import Textarea from "/components/textarea/statefull";
import Markdown from "markdown-to-jsx";
import {Toggler} from "/components/popupify";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import * as POPUPIFY from "/components/popupify";
import {TextareaMeta} from "/components/textarea/statefull";
import useMergedState from "/util/hooks/useMergedState";
import {CONFIRMER_POPUP_ID} from "/components/confirmerPopup";
import {FOMATING_HELP_POPUP_ID} from "/components/formattingHelpPopup";


interface State {
  readonly isOpen: boolean;
}

const init = (): State => ({
  isOpen: false,
});


const Wrapper = () => {
  const idCard = useSelector(cd.opened.id)
  const dispatch = useDispatch();
  const [textarea] = useState<TextareaMeta>({});
  const description = useSelector(cd.opened.description);
  const [{isOpen}, set] = useMergedState<State>(init);
  

  function open() {
    set({isOpen: true});
  }

  function close() {
    set({isOpen: false});
    textarea.set?.("");    
  }

  function commit() {
    if (isOpen && textarea.value) {
      set({
        isOpen: false, 
      });

      dispatch(cd.edit({
        idCard: idCard, 
        description: textarea.value,
      }));
    }
  }

  function cancel() {
    if (isOpen) {
      if (description === null || description === undefined || description === "") {
        if (textarea.value) {
          openUnsavedChangesWranner();
        } else {
          close();
        }
      } else {
        if (textarea.value !== description) {
          openUnsavedChangesWranner();
        } else {
          close();
        }
      }
    }
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (isOpen) {
      if (event.key === "Enter") {
        commit();
        stop(event);
      } else if (event.key === "Escape") {
        cancel();
        stop(event);
      }
    }
  }

  function openUnsavedChangesWranner() {
    dispatch(POPUPIFY.open({
      id: CONFIRMER_POPUP_ID,
      payload: {
        head: `Unsaved changes!`,
        body: `You have made unsaved changes, are you sure you want to close Editor Mode without saving your changes? They will be lost.`,

        btnAColor: "red",
        btnAContent: "Close",
        onBtnAClicked: close,

        btnBColor: "blue",
        btnBContent: "Save & Close",
        onBtnBClicked: commit,
      },      
      reference: "this",
    }))
  }


  useEffect(() => {
    if (description) {
      textarea.set?.(description);
    }
  }, [description]);

  useEffect(() => {
    isOpen ? textarea.select?.() : textarea.blur?.();
  }, [isOpen]);



  return (
    <section className={classNames(s.self, { [s.open]: isOpen})}>
      {/* the section's icon */}
      <div />

      {/* the section's title */}
      <h2>
        Description
      </h2>

      <button 
        type="button" 
        onClick={open}
        children="Edit" 
        className={btn.gray}
      />

      {
        isOpen || description === null ? (
          <article className={classNames(s.editor, {[s.open]: isOpen})}>
            <Textarea
              meta={textarea}
              styled={true}
              onFocus={open}
              onKeyDown={onKeyDown}
              placeholder="Add a more detailed description..."
            />

            <button 
              type="button"
              onClick={commit}
              children="Save"
              className={btn.blue}
            />

            <button 
              type="button"
              onClick={cancel}
              className={icon.cancel}
            />

            <Toggler
              target={FOMATING_HELP_POPUP_ID}
              zIndex={134543453454355}
              children="Formatting Help"
              className={btn.gray}
            />

          </article>
        ) : (
          <Markdown 
            className={s.viewer}
            children={description}
            onClick={open}
            options={{
              wrapper: "article",
              overrides: {
                h1: {props: {id: undefined}},
                h2: {props: {id: undefined}},
                h3: {props: {id: undefined}},
                h4: {props: {id: undefined}},
                h5: {props: {id: undefined}},
                h6: {props: {id: undefined}},
              },
            }} 
          />
        )
      }
    </section>
  )
};


export default React.memo(Wrapper);