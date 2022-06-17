import React from "react";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {ChangeEvent} from "react";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLSelectElement, {
  meta?: Meta | undefined;
  children?: JSX.IntrinsicElements["option"] | JSX.IntrinsicElements["option"][];
  initialValue?: string;
}>

interface Meta {
  set?(newValue: string): void;
  blur?(): void;
  node?: HTMLSelectElement | null;
  value?: string;
  focus?(): void;
}

const Select = React.memo<Props>(({
  meta = {},
  onChange,
  children,
  initialValue = "",
  ...rest
}) => {
  const node = useRef<HTMLSelectElement | null>(null);
  const [value, setValue] = useState<string>(initialValue);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);


  function wrapperOnChange(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
    onChange?.(event);
  }


  useEffect(() => {
    meta.set = setValue;
    meta.node = node.current;
    meta.value = value;
    meta.blur = () => setShouldBlur(true);
    meta.focus = () => setShouldFocus(true);
  });
  
  useEffect(() => {
    if (shouldBlur) {
      node.current?.blur();
      setShouldBlur(false);
    }
  }, [shouldBlur]);

  useEffect(() => {
    if (shouldFocus) {
      node.current?.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);


  return (
    <select
      {...rest}
      value={value} 
      onChange={wrapperOnChange}
      children={children}
    />
  );
});


export {
  Props as Props,
  Props as SelectProps,

  Meta as Meta,
  Meta as SelectMeta,

  Select as Select,
  Select as default,
};