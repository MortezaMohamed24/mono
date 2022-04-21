import s from "./style";
import React from "react";
import {shut} from "../manager";
import {backward} from "../manager";
import classNames from "classnames";


export interface HOCProps {
  id: symbol;
  title: string;
  Component: (props: {id: symbol, title: string}) => JSX.Element;
}

export interface TabProps {
  backwardable: boolean;
}

export interface TabComponent {
  (props: {backwardable: boolean}): JSX.Element;
}


export const tabify = ({id, title, Component}: HOCProps) => ({backwardable}: TabProps) => (
  <div className={classNames(s.tab, {[s.backwardable]: backwardable})}>
    <header>
      <button 
        type="button" 
        onClick={backwardable ? backward : undefined} 
      />

      <h2>
        {title}
      </h2>

      <button 
        type="button" 
        onClick={() => shut({id})} 
      />
    </header>

    <section>
      <Component id={id} title={title} />
    </section>
  </div>
);


export default tabify;