import React from "react";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLSelectElement, {
  meta?: Meta | undefined;
  value?: string | undefined;
  onNode?(node: HTMLSelectElement | null): void;
  onValue?(newValue: string): void;
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
  children?: "";
}>

type Meta = {
  blur?(): void;
  focus?(): void;
}

const Select = React.memo<Props>(({
  meta = {},
  value = "",
  onNode,
  onValue,
  onChange,
  children,
  ...rest
}) => {
  const node = useRef<HTMLSelectElement | null>(null);
  const [shouldBlur, setShouldBlur] = useState<boolean>(false);
  const [shouldFocus, setShouldFocus] = useState<boolean>(false);


  const _onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== value) {
      onValue?.(event.target.value);
      onChange?.(event);
    }
  };


  useEffect(() => {
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

  useEffect(() => {
    onNode?.(node?.current);
  }, [node.current]);


  return (
    <select
      {...rest}
      value={value} 
      onChange={_onChange}
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