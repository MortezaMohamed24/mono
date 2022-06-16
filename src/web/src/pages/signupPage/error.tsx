import s from "./style";
import sp from "./state";
import btn from "/style/button/style";
import React from "react";
import {signup} from "./state";
import {useDispatch} from "react-redux";


interface Props {
  error: unknown;
}

const Error = React.memo<Props>(({error}) => {
  const dispatch = useDispatch();


  return (
    <div className={s.error}>
      <p>
        {
          error === signup.ERRORS.CONNECTION_ERROR
            ? "Couldn't connect to the server, check your connection and proxy settings or try again later"
            : "Unexpected error occured"
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