import s from "/style/form/style";
import stop from "/util/event/stop";
import React from "react";
import {Props} from "./types"
import {useRef} from "react";
import autosize from "autosize";
import {useState} from "react";
import classnames from "classnames";
import {useEffect} from "react";
import removeBreaks from "/util/string/removeBreaks";
import useOnOuterClick from "../../util/a11y/clicks/useOnOuterClick";


const TwoModeTextarea = React.memo<Props>(({ 
  meta = {},
  value = "", 
  styled = false,
  oneLine = false,
  pattern,
  autoSize = false,
  onChange,
  className,
  onValidity,
  invalidClass = "",
  ...rest
}) => {

  // ---- state ----

  const node = useRef<HTMLTextAreaElement | null>(null);

  const [initialValue] = useState(value)
  const [mode, setMode] = useState<"VIEWING" | "EDITING">("VIEWING");
  const [view, setView] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const [shouldBlur, setShouldBlur] = useState(false);
  const [shouldFocus, setShouldFocus] = useState(false);
  const [shouldSelect, setShouldSelect] = useState(false);


  // ---- functions ----

  function cancel() {
    setView("");
    setMode("VIEWING");
  }
  
  function commit() {
    setView("");
    setMode("VIEWING");

    if (node.current?.validity.valid) {
      onChange?.(view);
    }
  }

  function setValue(newView: string) {
    setView(oneLine ? removeBreaks(newView) : newView);
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
      cancel();
      stop(event);
    }
  }

  function setValueByChangeEvent({target: {value}}: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(value); 
  }


  // ---- effects ---- 

  useEffect(() => {
    meta.set = setValue;
    meta.blur = () => setShouldBlur(true);
    meta.node = node.current;
    meta.value = value;
    meta.reset = () => setValue(initialValue);
    meta.focus = () => setShouldFocus(true);
    meta.select = () => setShouldSelect(true);
  });

  useEffect(() => {
    if (shouldSelect === true) {
      node.current?.focus();
      node.current?.select();
      setShouldSelect(false);
    }
  }, [shouldSelect]);
  
  useEffect(() => {
    if (shouldFocus === true) {
      node.current?.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);
  
  useEffect(() => {
    if (shouldBlur === true) {
      node.current?.blur();
      setShouldBlur(false);
    }
  }, [shouldBlur]);

  useEffect(() => {
    let _isValid = true;

    if (node.current) {
      _isValid = _isValid && node.current.validity.valid;
    } else {
      _isValid = _isValid && false;
    }

    if (pattern) {
      _isValid = _isValid && pattern.test(value);
    }

    if (_isValid !== isValid) {
      setIsValid(_isValid);
    }
  }, [value]);

  useEffect(() => {
    onValidity?.(isValid);
  }, [isValid]);

  useEffect(() => {
    if (node.current) {
      autosize(node.current);
    }
  }, [autoSize]);

  useOnOuterClick(mode === "EDITING" ? node.current : null, commit); 


  // ---- JSX ---- 

  return (
    <textarea
      {...rest}      
      ref={node}
      value={mode === "EDITING" ? view : value}
      onBlur={mode === "EDITING" ? cancel : undefined}
      onFocus={mode === "EDITING" ? undefined : activate}
      onChange={mode === "EDITING" ? setValueByChangeEvent : undefined}
      onKeyDown={mode === "EDITING" ? onKeyDown : undefined}
      className={classnames(className, s["no-validity-feedback"], {[s.fancy]: styled}, {[s.invalid]: !isValid})}
    />
  );
});


export default TwoModeTextarea;