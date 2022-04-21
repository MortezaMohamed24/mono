import s from "./style";
import lg from "./state";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import {Errors} from "./state";
import {useDispatch, useSelector} from "react-redux";


interface Props {
  error: Errors;
}


const Error = React.memo<Props>(({error}) => {
  const dispatch = useDispatch();
  const username = useSelector(lg.username.value);


  function reset() {
    dispatch(lg.clear());
  }


  return (
    <div className={s.error}>

      <h1 className={type.para}>
        { 
          error === Errors.OFFLINE 
            ? "You are not connected to the internet"
            : error === Errors.CONNECTION
              ? "Couldn't connect to the server, check your connection and proxy settings or try again later"
              : error === Errors.USERNAME 
                ? `There is no user with the username "${username}"`
                : error === Errors.PASSWORD
                  ? "Password is incorrect"
                  : "Unexpected error occourd. \nTry reloading the page."
        }
      </h1>

      <button type="button" onClick={reset} className={btn.gray}>
        Back to form
      </button>

    </div>
  );
});


export default Error;