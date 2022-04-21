import s from "./style";
import cm from "/checkitems";
import btn from "/style/button/style";
import icon from "/style/icon/style";
import stop from "/util/event/stop";
import React from "react";
import Textarea from "/components/textarea/statefull";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {TextareaMeta} from "/components/textarea/statefull";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";
import {MAX_CONTENT_LENGTH} from "/checkitems/fields/constants";
import {MIN_CONTENT_LENGTH} from "/checkitems/fields/constants";


interface Props {
  idChecklist: string;
}


const CheckitemCreator = React.memo(({idChecklist}: Props) => {
  const dispatch = useDispatch();
  const [content] = useState<TextareaMeta>({});
  const [mode, setMode] = useState<"VIEWING" | "EDITING">("VIEWING");
  const [editor, setEditor] = useState<HTMLElement | null>(null);
  const [isContentValid, setIsContentValid] = useState<boolean>(false);


  function commit() {
    if (content.value && isContentValid) {
      dispatch(cm.create({idChecklist, content: content.value}));
      content.set?.("");
      setMode("VIEWING");
    }    
  }

  function cancel() {
    setMode("VIEWING");
  }

  function activate() {
    setMode("EDITING");
  }

  function onKeyDownOfTeaxtarea(event: React.KeyboardEvent) {
    switch (event.key) {
      case "Enter": commit(); stop(event); break;
      case "Escape": cancel(); stop(event); break;
    }
  }


  useEffect(() => {
    if (mode === "EDITING") {
      content.focus?.();
    }
  }, [mode]);

  useOnOuterClick(editor, cancel);


  return (
    mode === "EDITING" ? (

      <article ref={setEditor} className={s.editor}>
        <Textarea 
          min={MIN_CONTENT_LENGTH}
          max={MAX_CONTENT_LENGTH}
          meta={content}
          styled={true}
          oneLine={true}
          required={true}
          onKeyDown={onKeyDownOfTeaxtarea}
          onValidity={setIsContentValid}
          placeholder="New task..."
        />

        <button 
          type="button"
          onClick={commit}
          disabled={!isContentValid}
          children="Save"
          className={btn.blue}
        />

        <button 
          type="button"
          onClick={cancel}
          className={icon.cancel}
        />
      </article>
    ) : (
      <button 
        type="button"
        onClick={activate}
        children="Add an item"
        className={`${btn.gray} ${s.view}`}
      />
    )
  );
});


export default CheckitemCreator;