import s from "./style";
import {on} from "./manager";
import {off} from "./manager";
import {get} from "./manager";
import React from "react";
import clicks from "/util/a11y/clicks";
import {AnyID} from "./manager/namespace";
import {Event} from "./manager/events";
import {close} from "./manager";
import {useRef} from "react";
import {Payloads} from "./manager/namespace";
import {Context} from "./manager";
import classnames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";


interface BaseProps {
  className?: string | undefined;
}

interface BuiltInProps<ID extends AnyID> {

}

interface Component<ID extends AnyID, Props extends BaseProps> {
  (props: {
    id: ID;
    props: Props;
    zIndex: number | undefined;
    payload: Payloads[ID]; 
    toggler?: string | undefined;
    backwardable: boolean;
  }): JSX.Element;
}


const modulify = <ID extends AnyID, Props extends BaseProps>(id: ID, Component: Component<ID, Props>) => (props: Props) => {
  const entry = get(id);
  const context = useRef<{id: ID}>({id});
  const [isOpen, setIsOpen] = useState(false);
  const zIndex = entry?.zIndex;
  const classname = isOpen && entry ? classnames(s.module, {[s.open]: isOpen}, {[s["backwardable"]]: entry.backwardable}) : undefined;

  
  const onOpen = useListener<Event>(({detail: {matches: match}}) => {
    if (match(id)) {
      if (isOpen) {
        // Force a rerender to refresh the `entry` constant
        setIsOpen(false);
        setIsOpen(true);
      } else {
        setIsOpen(true); 
      }
    }
  });

  const onClose = useListener<Event>(({detail: {matches: match}}) => {
    if (match(id)) { setIsOpen(false); }
  });
  
  const onClick = clicks.onExact(() => {
    close(id);
  });
  

  useEffect(() => {
    on("open", onOpen);
    on("close", onClose);

    return () => {
      off("open", onOpen);
      off("close", onClose);
    };
  }, []);


  return (
    <Context.Provider value={context.current}>
      {isOpen && entry ? (
        <article 
          style={{zIndex}}
          onClick={onClick}
          children={<Component {...entry} props={props} />}
          className={classname} 
        />
      ) : (
        null
      )}
    </Context.Provider>
  );
};


export default modulify;