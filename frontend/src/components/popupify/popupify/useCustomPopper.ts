import {useState} from "react";
import {useEffect} from "react";
import {usePopper} from "react-popper";


interface Options {
  zIndex?: number | undefined;
  reference?: string | undefined;
}

function useCustomPopper(options: Options = {}) { 
  const [popup, setPopup] = useState<null | HTMLElement>(null);
  const [reference, setReference] = useState<null | Element>(null);
  

  const popper = usePopper(reference, popup, {
    modifiers: [ 
      {name: "eventListeners", enabled: true},
      {name: "offset", options: {offset: [0, 10]}}, 
      {name: 'preventOverflow', options: {mainAxis: true, altAxis: true}},
    ],
  });


  
  useEffect(() => {
    setReference(queryReference(options.reference) ?? null);
  }, [options.reference]);



  return {
    popup: popup,
    styles: {...popper.styles.popper, ...{zIndex: options.zIndex}},
    setPopup: setPopup,
    reference: reference,
    attributes: popper.attributes.popper,
  };
}

function queryReference(referenceSelector: string | undefined) {
  if (!referenceSelector) {
    return;
  } 

  try {
    const reference = document.querySelector(referenceSelector);
    
    if (reference) {
      return reference;
    } 
    
    console.warn(`<Popup />: meta.reference (${referenceSelector}) doesn't match any element`);
  } 
  
  catch {
    throw new SyntaxError(`<Popup />: entry.reference (${referenceSelector}) is not a valid CSS selector.`);
  }
}


export {useCustomPopper};