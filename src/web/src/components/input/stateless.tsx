import s from "/style/form/style";
import React from "react";
import {useRef} from "react";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";


type Meta = {
  set?(newValue: string): void; 
  blur?(): void;
  reset?(): void;
  focus?(): void; 
  select?(): void;
}

type Props = React.AllHTMLAttributes<HTMLInputElement> & {
  meta?: Meta | undefined;
  value: string;
  styled?: boolean | undefined;
  onNode?(node: HTMLInputElement | null): void;
  onValue(value: string): void;
  onChange?(event: React.ChangeEvent): void;
  className?: string | undefined;
  onValidity?(isValid: boolean): void;
  invalidClass?: string | undefined;
}

const Input = React.memo(({ 
  meta = {},
  value,
  onNode,
  styled = false,
  onValue,
  className,
  onValidity,
  invalidClass = "",
  ...rest 
}: Props) => {

  const node = useRef<HTMLInputElement | null>(null);
  const [initialValue] = useState<string>(value);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);
  const [shouldSelect, setShouldSelect] = useState<boolean>(false);


  useEffect(() => {
    meta.set = onValue;
    meta.blur  = () => setShouldBlur(true);
    meta.reset = () => onValue(initialValue);
    meta.focus  = () => setShouldFocus(true);
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
      node.current?.focus();
      node.current?.select();
      setShouldSelect(false);
    }
  }, [shouldSelect]);

  useEffect(() => {
    if (node.current) {
      if (node.current.validity.valid !== isValid) {
        setIsValid(node.current.validity.valid);
        onValidity?.(node.current.validity.valid);
      }
    }
  }, [value]);

  useEffect(() => {
    onNode?.(node.current);
  }, [node.current]);


  return (
    <input
      {...rest} 
      ref={node}
      value={value} 
      onChange={({target}) => onValue(target.value)}
      className={classNames({[invalidClass]: !isValid && invalidClass}, {[s.fancy]: styled}, className)}
    />
  );
});



export {
  Meta as Meta,
  Meta as InputMeta,
  Meta as StatelessInputMeta,

  Input as Input,
  Input as default,
  Input as Component,
  Input as StatelessInput,

  Props as Props,
  Props as InputProps,
  Props as StatelessInputProps,
};