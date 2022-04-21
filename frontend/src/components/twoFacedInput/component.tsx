import s from "/style/form/style";
import stop from "/util/event/stop";
import React from "react";
import classnames from "classnames";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";

import {Props} from "./types";
import {useState} from "react";
import {useEffect} from "react";


const TwoFacedInput = React.memo<Props>(({ 
  meta = {},
  View = "h1",
  value = "", 
  styled = false,
  onNode,
  onChange,
  viewClass,
  inputClass,
  viewProps, 
  inputProps,
  onValidity,
}) => {
  
  // ---- state ----

  const [initialValue] = useState<string>(value);
  const [node, setNode] = useState<HTMLInputElement | null>(null);
  const [mode, setMode] = useState<"VIEWING" | "EDITING">("VIEWING");
  const [view, setView] = useState<string>("");
  const [isValid, setValidity] = useState<boolean>(false);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);
  const [shouldSelect, setShouldSelect] = useState<boolean>(false);


  // ---- functions ----

  function cancel() {
    setMode("VIEWING");
    setView("");
  }

  function commit() {
    setView("");
    setMode("VIEWING");

    if (node?.validity.valid) {
      onChange?.(view);
    }
  }

  function activate() {
    setMode("EDITING");
    setView(value);
    setShouldFocus(true);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      commit();
      stop(event);
    } if (event.key === "Escape") {
      cancel;
      stop(event);
    }
  }
  
  function setValueByChangeEvent({target}: React.ChangeEvent) {
    if (target instanceof HTMLInputElement) {
      setView(target.value);
    }
  }


  // ---- effects ----

  useEffect(() => {
    meta.set = (newView: string) => setView(newView);
    meta.blur = () => setShouldBlur(true);
    meta.reset = () => setView(initialValue);
    meta.focus = () => setShouldFocus(true);
    meta.select = () => setShouldSelect(true);
  });
  
  useEffect(() => {
    if (shouldBlur === true) {
      node?.blur();
      setShouldBlur(false);
    }
  }, [shouldBlur]);
  
  useEffect(() => {
    if (shouldFocus === true) {
      node?.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);

  useEffect(() => {
    if (shouldSelect === true) {
      node?.focus();
      node?.select();
      setShouldSelect(false);
    }
  }, [shouldSelect]);

  useEffect(() => {
    if (node) {
      setValidity(node.validity.valid);
    }
  }, [value]);

  useEffect(() => {
    onValidity?.(isValid);
  }, [isValid]);

  useEffect(() => {
    onNode?.(node);
  }, [node]);

  useOnOuterClick(node, cancel);


  // ---- JSX ----

  return (
    mode === "EDITING" ? (
      <input
        {...inputProps}
        ref={setNode}
        value={view}
        onChange={setValueByChangeEvent}
        className={classnames(inputClass, {[s.fancy]: styled})}
        onKeyDown={onKeyDown}
      />
    ) : (
      <View
        {...viewProps}
        onClick={activate}
        children={value}
        className={viewClass}
      />
    )
  );
});


export default TwoFacedInput;