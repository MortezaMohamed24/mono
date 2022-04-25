import s from "./style";
import stop from "/util/event/stop";
import React from "react";
import {Props} from "./types";
import {useState} from "react";
import classNames from "classnames";
import {usePopper} from "react-popper";
import typeography from "/style/typeography/style";
import popperOptions from "./util/popperOptions";
import useOnOuterClick from "/util/a11y/clicks/useOnOuterClick";


interface Props {
  caption?: string;
  options?: Record<any, unknown>[];
  noOptsMsg?: string;
  classname?: string;
}

const Selector = React.memo<Props>(({
  caption,
  options,
  noOptsMsg,
  classname,
}) => {
  const [popup, setPopup] = useState<null | HTMLUListElement>(null); 
  const [wrapper, setWrapper] = useState<null | HTMLElement>(null); 
  const [reference, setReference] = useState<null | HTMLParagraphElement>(null);

  const popper = usePopper(reference, popup, popperOptions(isOpen));
  const styles = popper.styles.popper;
  const classname = classNames(className, s.dropselect, {[s.open]: isOpen});
  const attributes = popper.attributes.popper;

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      open();
      stop(event);
    } else if (event.key === "Escape") {
      close();
      stop(event);
    }
  }


  useOnOuterClick(wrapper, close);


  return (
    <article {...rest} ref={setWrapper} className={classname} onClick={toggle}>

      <p className={`${typeography.text} ${typeography.sm}`}>
        {label}
      </p>

      <p ref={setReference} className={`${typeography.text} ${typeography.md}`}>
        {selected?.label}
      </p>

      <button type="button" />

      <ul ref={setPopup} {...attributes} style={{...styles}} onKeyDown={onKeyDown}>

        {length === 0 ? (
        
          <li>
            <p>{noOptsMsg}</p>
          </li>
          
        ) : (

          options.map((opt) => (
            <li key={opt.index}>
              <button 
                onClick={() => select({index: opt.index})}
                children={opt.name}
                className={classNames({[s.selected]: opt.index === selected?.index})}
              />
            </li>
          ))

        )}

      </ul>
    </article>
  );
});


export default React.memo(Selector);


const Options = () => {
  const [popup, setPopup] = useState<null | HTMLUListElement>(null); 
  const [wrapper, setWrapper] = useState<null | HTMLElement>(null); 
  const [reference, setReference] = useState<null | HTMLParagraphElement>(null);

  const popper = usePopper(reference, popup, popperOptions(isOpen));
  const styles = popper.styles.popper;
  const classname = classNames(className, s.dropselect, {[s.open]: isOpen});
  const attributes = popper.attributes.popper;

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      open();
      stop(event);
    } else if (event.key === "Escape") {
      close();
      stop(event);
    }
  }


  useOnOuterClick(wrapper, close);


  return (
    <article {...rest} ref={setWrapper} className={classname} onClick={toggle}>

      <p className={`${typeography.text} ${typeography.sm}`}>
        {label}
      </p>

      <p ref={setReference} className={`${typeography.text} ${typeography.md}`}>
        {selected?.label}
      </p>

      <button type="button" />

      <ul ref={setPopup} {...attributes} style={{...styles}} onKeyDown={onKeyDown}>

        {length === 0 ? (
        
          <li>
            <p>{noOptsMsg}</p>
          </li>
          
        ) : (

          options.map((opt) => (
            <li key={opt.index}>
              <button 
                onClick={() => select({index: opt.index})}
                children={opt.name}
                className={classNames({[s.selected]: opt.index === selected?.index})}
              />
            </li>
          ))

        )}

      </ul>
    </article>
  );
}