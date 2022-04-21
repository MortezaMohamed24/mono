import s from "./style";
import type from "/style/typeography/style";
import React from "react";
import idAttr from "/util/dom/idAttr";
import {VALID} from "./validation";
import Validator from "./validation";
import {Options} from "./validation";
import {useMemo} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import useMergedState from "/util/hooks/useMergedState";


type Props = {
  /** the minimum valid length for the value. defaults to `0` */
  min?: number | undefined;
  /** the maximum valid length for the value. defaults to `Infinity` */
  max?: number | undefined;
  /** a string to use as the field's label */
  label: string; 
  /** the current value of the field */
  value: string;
  /** a pattern to match the value against */
  pattern?: RegExp | undefined;
  /** Whether this field's value must not the empty string */
  required?: boolean | undefined;
  /** overriding status messages */
  messages?: Options["Messages"] | undefined;
  /** 
   * invoked whenver the value of the internal controled input (HTMLInputElement) 
   * changes. `value` is the current value of the controled input.
  */
  onValue(value: string): void;
  /** 
   * invoked whenever the value's validity changes. `isValid` indicates whether 
   * it's currently valid.
  */
  onValidity?(isValid: boolean): void;
  /**
   * What type of element should the field's `<label />` element should be 
   * wrapped within. defaults to `p`.
  */
  LabelWrapper?: `h${1 | 2 | 3 | 4 | 5  |6}` | "p" | undefined;
} 

type State = Readonly<{
  id: string;
  status: string;
  isValid: boolean;
  isFocused: boolean;
}>

const init = (): State => ({
  id: idAttr(),
  status: "",
  isValid: false,
  isFocused: false,
});

const InputWithValidityStatus = ({ 
  min,
  max,
  label, 
  value,
  pattern,
  onValue,
  required,
  messages,
  onValidity,
  LabelWrapper = "p", 
}: Props) => {
  const [{id, status, isValid, isFocused}, set] = useMergedState<State>(init);


  const validate = useMemo(() => (
    Validator({min, max, label, pattern, required, Messages: messages})
  ), [min, max, label, pattern, required, messages]);

  
  function onBlur(event: React.FocusEvent<HTMLInputElement>) {
    set({isFocused: false});
  }

  function onFocus(event: React.FocusEvent<HTMLInputElement>) {
    set({isFocused: true});
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    set({isFocused: true});
    onValue(event.target.value);
  }


  useEffect(() => {
    const validity = validate(value);

    if (validity[1] === VALID) {
      set({status: validity[0], isValid: true});
    } else {
      set({status: validity[0], isValid: false});
    }
  }, [value]);

  useEffect(() => {
    console.log(`${label} is ${isValid ? "valid" : "invalid"}`)
    onValidity?.(isValid);
  }, [isValid]);


  return (
    <div className={classNames(s.field, {[s.invalid]: !isValid})}>
      <LabelWrapper>
        <label htmlFor={id}>
          {label}
        </label>
      </LabelWrapper>

      <input
        id={id}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />

      {isFocused ? <p className={type.xs}>{status}</p> : null}
    </div>
  )
};


export default InputWithValidityStatus;