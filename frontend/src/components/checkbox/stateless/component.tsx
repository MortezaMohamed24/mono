import s from "../style";
import React from "react";
import Props from "./props";
import {useRef} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";


const CheckBox = React.memo<Props>(({ 
  checked = false, 
  onChange,
  className,
  onWrapper,
  onCheckbox,
  wrapperProps,
  ...checkboxProps
}) => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const checkbox = useRef<HTMLInputElement | null>(null);


  const onClick = useListener<MouseEvent>(() => {
    onChange?.(!checked);
  });
  

  useEffect(() => {
    onWrapper?.(wrapper.current);
  }, [wrapper.current]);

  useEffect(() => {
    onCheckbox?.(checkbox.current);
  }, [checkbox.current]);

  useEffect(() => {
    wrapper.current?.addEventListener("click", onClick);
    return () => {
      wrapper.current?.removeEventListener("click", onClick);
    };
  }, []);


  return (
    <div {...wrapperProps} ref={wrapper} className={classNames(className, s.checkbox, {[s.checked]: checked})}>
      <input 
        {...checkboxProps}
        ref={checkbox}
        type="checkbox" 
        checked={checked} 
        className={s.input} 
      />
    </div>
  );
});


export default React.memo(CheckBox);