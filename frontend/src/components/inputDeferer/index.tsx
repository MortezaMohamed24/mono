import React from "react";
import {Input} from "/components/input/stateless";
import {useRef} from "react";
import {InputMeta} from "/components/input/stateless";
import {InputProps} from "/components/input/stateless";


type Meta = InputMeta;
type Props = InputProps & {
  /** 
   * a millisecond timestamp specifing the desired interval between the dispatching 
   * of `onValue` events. defaults to `300`
  */
  deferBy?: number | undefined;
}


/**
 * This component is almost just a plain wrapper around the 
 * <Input /> component. 
 * 
 * It reduces the dispatching rate of `onValue` event of the `<Input />` 
 * component to a maximum of 1 dispatch per 300 milliseconds.
 * 
 * you can change the dispatch interval by assigning a new timestamp 
 * to the `deferBy` prop 
 */
const InputDeferer = ({deferBy = 300, onValue, ...rest}: Props) => {
  /** The a clearing code of the last set timeout */
  const timeout = useRef<number | null>(null);
  /** When the next time to invoke `onValue` is */
  const timenext = useRef<number>(Date.now());


  const customOnValue = (newValue: string) => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);  
    }
    
    if (timenext.current <= Date.now()) {
      timenext.current = Date.now() + deferBy;
    }

    timeout.current = setTimeout(() => onValue(newValue), timenext.current);
  };


  return <Input {...rest} type="text" onValue={customOnValue}/>;
};


export {
  Meta as Meta,
  Meta as InputMeta,
  Meta as InputDefererMeta,

  Props as Props,
  Props as InputProps,
  Props as InputDefererProps,

  InputDeferer as Input,
  InputDeferer as default,
  InputDeferer as Component,
  InputDeferer as InputDeferer,
};