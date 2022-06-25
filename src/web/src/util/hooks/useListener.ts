import React from "react";
import {useRef} from "react";


export const useListener = <TEvent extends Event | React.BaseSyntheticEvent>(listener: (event: TEvent) => void) => {
  const wrapped = useRef(listener);
  wrapped.current = listener;

  
  const wrapper = useRef((event: TEvent) => {
    wrapped.current(event);
  });
  

  return wrapper.current;
};


export default useListener;