import s from "./style";
import sp from "./state";
import btn from "/style/button/style";
import React from "react";
import {Errors} from "./state";
import {useDispatch} from "react-redux";


interface Props {
  error: Errors.OFFLINE | Errors.CONNECTION | Errors.UNRECOGNIZED;
}

const Error = React.memo<Props>(({error}) => {
  const dispatch = useDispatch();


  return (
    <div className={s.error}>
      <p>
        {
          error === Errors.OFFLINE
          ? "You are not connected to the internet"
          : error === Errors.CONNECTION
            ? "Couldn't connect to the server, check your connection and proxy settings or try again later"
            : error === Errors.UNRECOGNIZED
              ? "Unexpected error occured"
              : ""
        }
      </p>
  
      <button 
        type="button"
        onClick={() => dispatch(sp.clear())} 
        children="Back to form"
        className={btn.gray} 
      />
    </div>
  );
});


export default Error;