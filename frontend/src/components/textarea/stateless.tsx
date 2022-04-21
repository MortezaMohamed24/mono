import s from "/style/form/style";
import React from "react";
import autosize from "autosize";
import {useRef} from "react";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import removeBreaks from "/util/string/removeBreaks";


type Props = React.AllHTMLAttributes<HTMLTextAreaElement> & {
  meta?: Meta;
  /** the textarea's current value */
  value?: string | undefined;
  styled?: boolean | undefined;
  /** whether to prevent the textarea's current value to include line terminators. defaults to `false`. */
  oneLine?: boolean | undefined;
  pattern?: RegExp | undefined;
  /** defaults to `false` */
  autoSize?: boolean | undefined;
  onNode?(node: HTMLTextAreaElement): void;
  onValue(newValue: string): void;
  className?: string | undefined;
  onValidity?(isValid: boolean): void;
  invalidClass?: string | undefined;
}

interface Meta {
  blur?(): void;
  focus?(): void; 
  select?(): void;
}

const Textarea = React.memo(({ 
  meta = {},
  value = "", 
  styled = false,
  oneLine = false,
  pattern,
  onValue,
  autoSize = false,
  className = "",
  onValidity,
  invalidClass = "",
  ...rest 
}: Props) => {

  // ---- state ----

  const node = useRef<HTMLTextAreaElement | null>(null);
  const [validity, setValidity] = useState<boolean>(false);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);
  const [shouldSelect, setShouldSelect] = useState<boolean>(false);


  // ---- functions ----

  const _setValue = (newValue: string) => {
    onValue(oneLine ? removeBreaks(newValue) : newValue);
  };


  // ---- effects ----

  useEffect(() => {
    meta.blur = () => setShouldBlur(true);
    meta.focus = () => setShouldFocus(true);
    meta.select = () => setShouldSelect(true);
  });

  useEffect(() => {
    if (node.current && autoSize) {
      autosize(node.current);
    }
  }, [node.current]);

  useEffect(() => {
    if (shouldFocus === true) {
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
      node.current?.focus();
      node.current?.select();
      setShouldSelect(false);
    }
  }, [shouldSelect]);

  useEffect(() => {
    if (node.current) {
      const conditionA = node.current.validity.valid;
      const conditionB = pattern ? pattern.test(value) : true;

      const isValid = conditionA && conditionB;

      if (isValid !== validity) {
        setValidity(isValid);
        onValidity?.(isValid);
      }
    } 
  }, [value]);


  // ---- JSX ----

  return (
    <textarea 
      {...rest} 
      ref={node}
      value={value} 
      onChange={({target}) => _setValue(target.value)} 
      className={classNames(className, {[s.fancy]: styled})}
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