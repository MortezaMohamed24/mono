import stop from "/util/event/stop";
import isAbove from "/util/event/isAbove";
import {StopCode} from "/util/event/stop";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";


const useOnOuter = <Node extends Element>(
  node: Node | undefined | null, 
  handler: (event: MouseEvent, node: Node) => void, 
  propagation: StopCode = "dip",
) => {
  const listener = useListener<MouseEvent>((event) => {
    if (node && isAbove(event, node)) {
      handler?.(event, node);
      stop(event, propagation);
    }
  });

  
  // Add it only when node is defined, and remove it when it's not
  useEffect(() => {
    if (node) {
      globalThis.addEventListener("click", listener);
    } else {
      globalThis.removeEventListener("click", listener);
    }
  }, [node, handler]);


  // When the user component unmounts, remove if it's added
  useEffect(() => () => {
    globalThis.removeEventListener("click", listener);
  }, []);
};


export default useOnOuter;