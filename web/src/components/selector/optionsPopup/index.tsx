import s from "./style";
import ps from "/components/popupify/style";
import React from "react";
import {Header} from "/components/popupify";
import popupify from "/components/popupify";
import SELECTOR from "../state";
import classNames from "classnames";
import {useSelector} from "/store";
import {useDispatch} from "react-redux";


type ID = typeof ID;
const ID = "ui/components/selector-popup";


declare global {
  export interface Components_Popups_Payloads {
    [ID]: {
      /** The id of the `<Selector />` component fow which this popup is opened */
      id: string;
    }
  }
}


const OptionsPopup = popupify(ID, ({payload: {id}}) => {
  const selector = useSelector(SELECTOR.selectInstance(id));
  const dispatch = useDispatch();


  function select(index: number) {
    dispatch(SELECTOR.select(id, index));
  }


  if (!selector) {
    return (
      <>
        <Header title={"Unexpected Error"} />
        <section className={ps.body}>
          <p>Unexpcted Error Cccoured.</p>
          <br/>
          <p>Pleaes Reload The Page</p>
        </section>
      </>
    );
  }
  
  
  return (
    <>
      <Header title={selector.caption || "Select Option"} />
      <section className={ps.body}>
        {length === 0 ? (
          <p>{selector.noOptionsMessage || "No Options."}</p>
        ) : (
          <ul className={ps.list}>
            {
              selector?.options.map((option, index) => (
                <li key={index} className={ps.li}>
                  <button 
                    onClick={() => select(index)}
                    children={option.longName || option.shortName}
                    className={classNames({[s.selected]: index === selector.selected})}
                  />
                </li>
              ))
            }
          </ul>
        )}
      </section>
    </>
  );
});


export {ID, OptionsPopup};