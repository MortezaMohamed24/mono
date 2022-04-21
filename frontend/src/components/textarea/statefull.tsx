import s from "/style/form/style";
import React from "react";
import autosize from "autosize";
import {useRef} from "react";
import {useState} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";
import removeBreaks from "/util/string/removeBreaks";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLTextAreaElement, {
  meta?: Meta;
  /** the textarea's initial value. */
  value?: string | undefined;
  styled?: boolean | undefined;
  /** whether to allow the textarea's value to include line terminators */
  oneLine?: boolean | undefined;
  pattern?: RegExp | undefined;
  autoSize?: boolean | undefined;
  /** invoked whenever the textarea's value changes. `value` is the new textarea's value. */
  onValue?(value: string): void;
  className?: string | undefined;
  /** 
   * invoked whenever the textarea's value's validity changes. 
   * `isValid` indicates the new textarea's value's validity. 
  */
  onValidity?(isValid: boolean): void;
  invalidClass?: string | undefined;
}>

interface Meta {
  set?(newValue: string): void; 
  blur?(): void;
  node?: HTMLTextAreaElement | null;
  value?: string;
  reset?(): void;
  focus?(): void; 
  select?(): void;
}

const Textarea = React.memo<Props>(({ 
  meta = {},
  value: initialValue_ = "", 
  styled = false,
  oneLine = false,
  autoSize = false,
  pattern,
  className = "",
  onValidity,
  invalidClass,
  ...rest 
}) => {

  // ---- state ----

  const node = useRef<HTMLTextAreaElement | null>(null);
  const [initialValue] = useState(initialValue_);
  const [value, setValue] = useState(initialValue);
  const [isValid, setValidity] = useState(false);
  const [shouldBlur, setShouldBlur] = useState(false);
  const [shouldFocus, setShouldFocus] = useState(false);
  const [shouldSelect, setShouldSelect] = useState(false);


  // ---- functions ----

  const valueSetter = useListener<InputEvent>(({target}) => {
    if (target instanceof HTMLTextAreaElement) {
      setValue(oneLine ? removeBreaks(target.value) : target.value);
    }
  });


  // ---- effects ----

  useEffect(() => {
    meta.set = setValue;
    meta.blur = () => setShouldBlur(true);
    meta.node = node.current;
    meta.value = value;
    meta.focus = () => setShouldFocus(true);
    meta.reset = () => setValue(initialValue);
    meta.select = () => setShouldSelect(true);
  });
  
  useEffect(() => {
    if (shouldBlur === true) {
      node.current?.blur();
      setShouldBlur(false);
    }
  }, [shouldBlur]);
  
  useEffect(() => {
    if (shouldFocus === true) {
      node.current?.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);

  useEffect(() => {
    if (shouldSelect === true) {
      node.current?.select();
      node.current?.focus();
      setShouldSelect(false);
    }
  }, [shouldSelect]);

  useEffect(() => {
    if (node.current) {
      const conditionA = node.current.validity.valid;
      const conditionB = pattern ? pattern.test(value) : true;

      const isValid = conditionA && conditionB;
  
      setValidity(isValid);
    }
  }, [value]);

  useEffect(() => {
    onValidity?.(isValid);
  }, [isValid]);

  useEffect(() => {
    if (node.current && autoSize) {
      autosize(node.current);
    }
  }, [node.current]);

  useEffect(() => {
    node.current?.addEventListener("input", valueSetter as any);
    return () => {
      node.current?.removeEventListener("input", valueSetter as any);
    };
  });


  // ---- JSX ----

  return (
    <textarea 
      {...rest} 
      ref={node}
      value={value} 
      className={classNames(className, {[s.fancy]: styled}, {[s.invalid]: !isValid})}
    />
  );
});


export {
  Meta as Meta,
  Meta as TextareaMeta,
  Meta as StatelessTextareaMeta,

  Props as Props,
  Props as TextareaProps,
  Props as StatelessTextareaProps,

  Textarea as default,
  Textarea as Textarea,
  Textarea as Component,
  Textarea as StatelessTextarea,
};