import React               from "react";
import {useHistory, Route} from "react-router-dom";
import {onExactClick}      from "/util/accessablity";
import s                   from "./style";


const URLModule = ({ Component, path, exact }) => {
  const history = useHistory();


  const onClick = onExactClick(() => {
    history.goBack();
  });
  

  return (
    <Route path={path} exact={exact}>
      {({ match, location, history }) => {
        if (match) {
          return (
            <article className={s.module} onClick={onClick}>
              <Component
                match={match}
                location={location}
                history={history}
              />
            </article>
          );
        } else {
          return null;
        }
      }}
    </Route>
  );
};


export default URLModule;