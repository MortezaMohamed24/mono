import s from "/style/form/style";
import React from "react";
import {useRef} from "react";
import {useState} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import {ChangeEvent} from "react";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Meta = {
  set?(newValue: string): void; 
  blur?(): void;
  node?: HTMLInputElement | null; 
  /** the current component's value */
  value?: string;
  reset?(): void;
  focus?(): void; 
  select?(): void;
}

type Props = WithHTMLAttributes<HTMLInputElement, {
  meta: Meta | undefined;
  styled?: boolean | undefined;
  className?: string | undefined;
  /** invoked whenver the value's validity changes. `isValid` indicates whether it's currently valid */
  onValidity?(isValid: boolean): void;
  /** the initial value for the component */
  initialValue?: string | undefined;
  /** a class to be assigned to the component is the current value is invalid */
  invalidClass?: string | undefined;
}> 

const Input = React.memo<Props>(({ 
  meta = {},
  styled = false,
  onChange,
  className,
  onValidity,
  initialValue = "",
  invalidClass = "", 
  ...rest
}) => {
  const node = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<string>(initialValue);
  const [isValid, setValidity] = useState<boolean>(false);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);
  const [shouldSelect, setShouldSelect] = useState<boolean>(false);


  function set(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onChange?.(event);
  }


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
      if (node.current.validity.valid !== isValid) {
        setValidity(node.current.validity.valid);
      }
    }
  }, [value]);

  useEffect(() => {
    onValidity?.(isValid);
  }, [isValid]);

  return (
    <input
      {...rest} 
      ref={node}
      value={value} 
      onChange={set} 
      className={classNames(className, {[s.fancy]: styled}, {[invalidClass]: invalidClass && !isValid})}
    />
  );
});


export {
  Meta as Meta,
  Meta as InputMeta,
  Meta as StatefullInputMeta,

  Props as Props,
  Props as InputProps,
  Props as StatefullInputProps,

  Input as Input,
  Input as default,
  Input as Component,
  Input as StatefullInput,
};