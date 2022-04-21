import React from "react";
import {useRef} from "react";


const useListener = <_Event extends Event | React.BaseSyntheticEvent>(listener: (event: _Event) => void) => {
  const wrapped = useRef(listener);
  wrapped.current = listener;

  
  const wrapper = useRef((event: _Event) => {
    wrapped.current(event);
  });
  

  return wrapper.current;
};


export default useListener;