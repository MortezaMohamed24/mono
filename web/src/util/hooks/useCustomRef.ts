import {useRef} from "react";


function useEasyRef<T>(initialValue?: T) {
  const ref = useRef({
    value: initialValue,
    setValue: (newValue: T) => { ref.current.value = newValue; },
  });

  return [ref.current.value, ref.current.setValue] as const;
}


export default useEasyRef;