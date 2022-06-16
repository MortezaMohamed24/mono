import s from "./style";
import bd from "/features/boards";
import ll from "/features/lists";
import btn from "/style/button/style";
import icon from "/style/icon/style";
import form from "/style/form/style";
import stop from "/util/event/stop";
import Input from "/components/input/statefull";
import React from "react";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";

import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {InputMeta} from "/components/input/statefull";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {MIN_TITLE_LENGTH} from "/features/lists/fields/constants";
import {MAX_TITLE_LENGTH} from "/features/lists/fields/constants";


const BoardListCreator = () => {
  const idBoard = useSelector(bd.opened.id);
  const [input] = useState<InputMeta>({});
  const backface = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [titleIsValid, setTitleIsValid] = useState<boolean>(false);


  function commit() {
    if (idBoard && titleIsValid && input.value) {
      dispatch(ll.create({
        title: input.value,
        idBoard: idBoard, 
      }));

      input.set?.("New List")
      input.select?.();

      scrollIntoView();
    }
  }

  function activate() {
    setIsActive(true);
    setTitleIsValid(false);
  }

  function inactivate() {
    setIsActive(false);
    setTitleIsValid(false);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      commit();
      stop(event);
    } else if (event.key === "Escape") {
      inactivate();
      stop(event);
    }
  }

  function onActivated() {
    input.set?.("New list");
    input.select?.();
    scrollIntoView();
  }

  function onInactivated() {
    input.set?.("");
  }
  
  function scrollIntoView() {
    if (backface.current) {
      const parent = backface.current.parentElement;

      if (parent) {
        setTimeout(() => {
          parent?.scroll({
            top: 0,
            left: parent.scrollWidth,
            behavior: "smooth",
          });
        }, 200)
      }
    }
  }


  useEffect(() => {
    if (isActive) {
      onActivated();
    } else {
      onInactivated();
    }
  }, [isActive]);

  useOnOuterClick(backface.current, inactivate);


  return isActive ? (
    <article ref={backface} className={s.back} onKeyDown={onKeyDown} tabIndex={0}>

      <Input
        min={MIN_TITLE_LENGTH}
        max={MAX_TITLE_LENGTH}
        meta={input}
        required={true}
        className={form.fancy} 
        onValidity={setTitleIsValid}
        placeholder="Enter list's title"
      />

      <button 
        type="button"
        onClick={commit}
        children="add List"
        disabled={!idBoard || !titleIsValid}
        className={btn.blue} 
      />

      <button 
        type="button"
        onClick={inactivate}
        className={icon.cancel}
      />
    </article>
  ) : (
    <button 
      type="button"
      onClick={activate}
      children="Add a List"
      className={`${s.front} ${btn.lightest}`} 
    />
  );
};


export default React.memo(BoardListCreator);