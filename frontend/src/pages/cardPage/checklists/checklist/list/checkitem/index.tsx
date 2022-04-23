import s from "./style";
import cm from "/features/checkitems";
import btn from "/style/button/style";
import icon from "/style/icon/style";
import stop from "/util/event/stop";
import React from "react";
import CheckBox from "/components/checkbox/stateless";
import Textarea from "/components/textarea/statefull";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {TextareaMeta} from "/components/textarea/statefull";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";
import {ChecklistNative} from "/features/checklists/entity";
import {MAX_CONTENT_LENGTH} from "/features/checkitems/fields/constants";
import {MIN_CONTENT_LENGTH} from "/features/checkitems/fields/constants";


interface Props {
  filter: ChecklistNative["filter"];
  idCheckitem: string;
}


const Checkitem = ({filter, idCheckitem}: Props) => {
  const dispatch = useDispatch();
  const [content] = useState<TextareaMeta>({});
  const checkitem = useSelector(cm.one({id: idCheckitem}));
  const [mode, setMode] = useState<"VIEWING" | "EDITING">("VIEWING");
  const [viewer, setViewer] = useState<HTMLElement | null>(null);
  const [isContentValid, setIsContentValid] = useState(false);


  if ((
    /** verifying that idCheckitem exists */
    checkitem === undefined || checkitem === null
  ) || (
    /** verifying that this checkitem matches filter */
    filter === "INCOMPLETE" && checkitem.isComplete === true
  )) {
    return null;
  }


  const commit = () => {
    setMode("VIEWING");

    if ((
      isContentValid
    ) && (
      content.value
    ) && (
      content.value !== checkitem.content
    )) {
      setContent(content.value);
    }

    content.set?.("");
  };

  const cancel = () => {
    if (mode === "EDITING") {
      content.set?.("");
      setMode("VIEWING");
    }
  };

  const activate = () => {
    setMode("EDITING");
  };


  const destroy = () => {
    dispatch(cm.destroy({idCheckitem}));
  };

  const setContent = (newContent: string) => {
    dispatch(cm.edit({idCheckitem, content: newContent}));
  };

  const setIsComplete = (isComplete: boolean) => {
    if (isComplete !== checkitem.isComplete) {
      dispatch(cm.edit({idCheckitem, isComplete: !isComplete}));
    }
  };


  const onKeyDownOfTextarea = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      commit();
      stop(event);
    } else if (event.key === "Escape") {
      cancel();
      stop(event);
    }
  };


  useEffect(() => {
    if (mode === "EDITING") {
      content.set?.(checkitem.content || "");
      content.select?.();
    }
  }, [mode]);

  useOnOuterClick(viewer, cancel);


  return (
    <li>

      {mode === "EDITING" ? (

        <section ref={setViewer} className={s.editor}>
          <Textarea 
            min={MIN_CONTENT_LENGTH}
            max={MAX_CONTENT_LENGTH}
            meta={content}
            styled={true}
            required={true}
            onKeyDown={onKeyDownOfTextarea}
            onValidity={setIsContentValid}
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
        </section>

      ) : (

        <div className={classNames(s.viewer, {[s.complete]: checkitem.isComplete})}>

          <CheckBox 
            checked={checkitem.isComplete} 
            onChange={setIsComplete} 
          />

          <p onClick={activate}>
            {checkitem?.content || "(No content)"}
          </p>

          <button 
            type="button" 
            onClick={destroy} 
          />

        </div>

      )}

    </li>
  );
};


export default React.memo(Checkitem);