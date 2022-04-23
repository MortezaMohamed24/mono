import s from "./style";
import lg from "./state";
import btn from "/style/button/style";
import React from "react";
import {Link} from "react-router-dom";
import {USERNAME} from "/features/user/fields/constants";
import {PASSWORD} from "/features/user/fields/constants";
import typeography from "/style/typeography/style";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {MIN_USERNAME_LENGTH} from "/features/user/fields/constants";
import {MAX_USERNAME_LENGTH} from "/features/user/fields/constants";
import {MIN_PASSWORD_LENGTH} from "/features/user/fields/constants";
import {MAX_PASSWORD_LENGTH} from "/features/user/fields/constants";
import InputWithValidityStatus from "/components/inputWithStatus";


const Form = React.memo<{}>(() => {
  const status = useSelector(lg.status);
  const dispatch = useDispatch();
  const username = useSelector(lg.username);
  const password = useSelector(lg.password);
  const validity = username.isValid && password.isValid;


  function commit() {
    if (validity === true && status === "idle") {
      dispatch(lg.login({
        username: username.value, 
        password: password.value,
      }));
    }
  }

  function setUsername(value: string) {
    dispatch(lg.edit({username: {value}}));
  }
  
  function setPassword(value: string) {
    dispatch(lg.edit({password: {value}}));
  }
  
  function setUsernameValidity(isValid: boolean) {
    dispatch(lg.edit({username: {isValid}}));
  }
  
  function setPasswordValidity(isValid: boolean) {
    dispatch(lg.edit({password: {isValid}}));
  }
  
  
  return (
    <div className={s.form}>
      <h1 className={typeography.h1}>
        Log in to Mono
      </h1>

      <InputWithValidityStatus
        min={MIN_USERNAME_LENGTH}
        max={MAX_USERNAME_LENGTH}
        label="Username"
        value={username.value}
        onValue={setUsername}
        pattern={new RegExp(USERNAME)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} must only consist of: letters, dashes and underscores`}}
        onValidity={setUsernameValidity}
      />
      
      <InputWithValidityStatus 
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        label="Password"
        value={password.value}
        onValue={setPassword}
        pattern={new RegExp(PASSWORD)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} must only consist of: letters, digits, dashes and underscores`}}
        onValidity={setPasswordValidity}
      />

      <button type="button" onClick={commit} disabled={!validity} className={btn.blue}>
        Continue
      </button>

      <hr className={typeography.hr} />

      <p className={`${typeography.center} ${typeography.sm}`}>
        Don't have an account? 
        
        <Link className={typeography.link} to="/signup"> 
          Create one
        </Link>
      </p>
    </div>
  );
});


export default Form;