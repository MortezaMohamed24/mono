import S from "./style";
import React from "react";


const boardPanelify = <Props extends object = {}>(Component: React.FunctionComponent) => (
  React.memo<Props>((props) => (
    <section className={S.panel}>
      <Component {...props} />
    </section>
  ))
);


export default boardPanelify;