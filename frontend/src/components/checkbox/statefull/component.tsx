import s from "../style";
import React from "react";
import Props from "./props";
import {useRef} from "react";
import {useState} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";


const Checkbox = React.memo<Props>(({ 
  meta = {},
  checked = false, 
  onCheck,
  onChange, 
  className,
  onUncheck,
  wrapperProps,
  ...checkboxProps
}) => {

  const wrapper = useRef<HTMLDivElement | null>(null);
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(checked);


  const onClick = useListener<MouseEvent>(() => {
    setIsChecked(!isChecked);
  });


  useEffect(() => {
    meta.check = () => setIsChecked(true);
    meta.toggle = () => setIsChecked(!isChecked);
    meta.uncheck = () => setIsChecked(false);
    meta.checked = isChecked;
    meta.wrapper = wrapper.current;
    meta.checkbox = checkbox.current;
  });

  useEffect(() => {
    onChange?.(isChecked);

    if (isChecked === true) {
      onCheck?.(true);
    } else {
      onUncheck?.(false);
    }
  }, [isChecked]);

  useEffect(() => {
    wrapper.current?.addEventListener("click", onClick);
    return () => {
      wrapper.current?.removeEventListener("click", onClick);
    };
  }, []);


  return (
    <div {...wrapperProps} ref={wrapper} className={classNames(className, s.checkbox, {[s.checked]: isChecked})}>
      <input 
        {...checkboxProps}
        ref={checkbox}
        type="checkbox" 
        checked={isChecked} 
        className={s.input} 
      />
    </div>
  );
});


export default Checkbox;