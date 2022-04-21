import s from "./style";
import stop from "/util/event/stop";
import {on} from "./manager";
import {off} from "./manager";
import {get} from "./manager";
import React, { useMemo } from "react";
import {close} from "./manager";
import {Event} from "./manager";
import {AnyID} from "./manager";
import {Payloads} from "./manager";
import {useRef} from "react";
import {Context} from "./manager";
import {useState} from "react";
import classNames from "classnames";
import {useEffect} from "react";
import {usePopper} from "react-popper";
import useListener from "/util/hooks/useListener";


interface BaseProps {
  className?: string | undefined;
}

interface Component<ID extends AnyID, Props extends BaseProps> {
  (props: {
    id: ID;
    props: Props;
    zIndex: number | undefined;
    payload: Payloads[ID]; 
    toggler: string;
    reference: string;
    backwardable: boolean;
  }): JSX.Element;
}

const popupify = <ID extends AnyID, Props extends BaseProps>(id: ID, Component: Component<ID, Props>) => (props: Props) => {
  const entry = get(id);
  const context = useRef<{id: ID}>({id});

  const [popup, setPopup] = useState<HTMLElement | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reference, setReference] = useState<Element | undefined | null>();
  
  const zIndex = entry?.zIndex; 
  const className = isOpen ? classNames(props.className, s.popup, {[s.open]: isOpen}, {[s["backwardable"]]: entry?.backwardable}) : "";

  const popper = usePopper(reference, popup, popperOptions());
  const styles = {...popper.styles.popper, ...{zIndex}};
  const attributes = popper.attributes.popper;


  const MemoizedComponent = useMemo(() => React.memo(Component), [Component]);


  const onOpen = useListener<Event>(({detail}) => {
    if (detail.matches(id)) {
      if (isOpen) {
        // Force a rerender to refresh the `meta` constant
        setIsOpen(false);
        setIsOpen(true);
      } else {
        setIsOpen(true); 
      }
    }
  });

  const onClose = useListener<Event>(({detail}) => {
    if (detail.matches(id)) { 
      setIsOpen(false); 
    }
  });

  const onKeyDown = useListener<React.KeyboardEvent>((event) => {
    if (event.key === "Escape") {
      close(id);
      stop(event);
    }
  });


	useEffect(() => {
    on("open", onOpen);
    on("close", onClose);

    return () => {
      off("open", onOpen);
      off("close", onClose);
    };
	}, []);

  useEffect(() => {
    if (isOpen && popup) { 
      if (!popup.matches("*:focus-within")) {
        popup.focus(); 
      }
    }
  }, [isOpen, popup]);

  useEffect(() => {
    let referenceSelector = entry?.reference;

    if (!referenceSelector) {
      setReference(undefined);
      return;
    } 

    let newReference;
    
    try {
      newReference = document.querySelector(referenceSelector);
    } catch {
      throw new SyntaxError(`<Popup />: entry.reference (${referenceSelector}) is not a valid CSS selector.`);
    }

    if (newReference) {
      setReference(newReference);
    } else {
      console.warn(`<Popup />: meta.reference (${referenceSelector}) doesn't match any element`);
    }
  }, [entry?.reference]);


  return (
    <Context.Provider value={context.current}>
      {isOpen && entry ? (
        <article 
          {...attributes}
          ref={setPopup} 
          style={styles}
          data-id={id} 
          tabIndex={0}
          children={<MemoizedComponent {...entry} props={props} />}
          onKeyDown={onKeyDown}
          className={className}
        />
      ) : (
        null
      )}
    </Context.Provider>
  );
};

const popperOptions = () => ({
  modifiers: [ 
    {name: "eventListeners", enabled: true},
    {name: "offset", options: {offset: [0, 10]}}, 
    {name: 'preventOverflow', options: {mainAxis: true, altAxis: true}},
  ],
}); 


export default popupify;