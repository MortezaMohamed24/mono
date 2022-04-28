import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import {Header} from "/components/popupify";
import {popupify} from "/components/popupify";
import classNames from "classnames";


const Options = popupify(ID, ({payload: {id, options, caption, noOpionsMessage}}) => (
  <>
    <Header title={caption || "Select Option"} />
    <section className={ps.body}>
      <ul>

      {length === 0 ? (

        <li>
          <p>{noOpionsMessage || "No Options"}</p>
        </li>
        
      ) : (

        options.map((option, index) => (
          <li key={index}>
            <button 
              onClick={() => select(index)}
              children={option.name}
              className={classNames({[s.selected]: option.index === selected?.index})}
            />
          </li>
        ))

      )}

      </ul>
    </section>
  </>
))