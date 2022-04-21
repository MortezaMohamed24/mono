import s from "./style";
import sp from "./state";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import {Link} from "react-router-dom";
import {Errors} from "./state";
import {USERNAME} from "/user/fields/constants";
import {PASSWORD} from "/user/fields/constants";
import {LASTNAME} from "/user/fields/constants";
import {FIRSTNAME} from "/user/fields/constants";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import InputWithStatus from "/components/inputWithStatus";
import {MIN_USERNAME_LENGTH} from "/user/fields/constants";
import {MAX_USERNAME_LENGTH} from "/user/fields/constants";
import {MIN_PASSWORD_LENGTH} from "/user/fields/constants";
import {MAX_PASSWORD_LENGTH} from "/user/fields/constants";
import {MIN_LASTNAME_LENGTH} from "/user/fields/constants";
import {MAX_LASTNAME_LENGTH} from "/user/fields/constants";
import {MIN_FIRSTNAME_LENGTH} from "/user/fields/constants";
import {MAX_FIRSTNAME_LENGTH} from "/user/fields/constants";


interface Props {
  error: Errors.USERNAME | Errors.PASSWORD | Errors.LASTNAME | Errors.FIRSTNAME | Errors.UNAVAILABLE | undefined | null;
}


const Form = React.memo<Props>(({error}) => {
  const status = useSelector(sp.status);
  const dispatch = useDispatch();
  const validity = useSelector(sp.validity);
  const username = useSelector(sp.username);
  const password = useSelector(sp.password);
  const lastname = useSelector(sp.lastname);
  const firstname = useSelector(sp.firstname);
  

  function commit() {
    if (validity === true && status === "idle") {
      dispatch(sp.signup({
        username: username.value, 
        password: password.value, 
        lastname: lastname.value, 
        firstname: firstname.value, 
      }));
    }
  }

  function setUsername(value: string) {
    dispatch(sp.edit({error: null, status: "idle", username: {value}}));
  }
  
  function setLastname(value: string) {
    dispatch(sp.edit({error: null, status: "idle", lastname: {value}}));
  }
  
  function setPassword(value: string) {
    dispatch(sp.edit({error: null, status: "idle", password: {value}}));
  }
  
  function setFirstname(value: string) {
    dispatch(sp.edit({error: null, status: "idle", firstname: {value}}));
  }
  
  function setUsernameValidity(isValid: boolean) {
    dispatch(sp.edit({error: null, status: "idle", username: {isValid}}));
  }
  
  function setLastnameValidity(isValid: boolean) {
    dispatch(sp.edit({error: null, status: "idle", lastname: {isValid}}));
  }
  
  function setPasswordValidity(isValid: boolean) {
    dispatch(sp.edit({error: null, status: "idle", password: {isValid}}));
  }
  
  function setFirstnameValidity(isValid: boolean) {
    dispatch(sp.edit({error: null, status: "idle", firstname: {isValid}}));
  }  


  return (
    <div className={s.form}>
      <h1 className={type.h1}>
        Sign up to Mono
      </h1>

      <p style={{display: error ? "block" : "none"}}>
        {
          error === Errors.USERNAME 
            ? "Username is invalid"
            : error === Errors.PASSWORD
              ? "Password is invalid"
              : error === Errors.LASTNAME
                ? "Last name is invalid"
                : error === Errors.FIRSTNAME
                  ? "First name was invalid"
                  : error === Errors.UNAVAILABLE
                    ? `Username "${username.value}" is not available`
                    : "Unexpected error occured"
        }
      </p>

      <InputWithStatus
        min={MIN_USERNAME_LENGTH}
        max={MAX_USERNAME_LENGTH}
        label="User name"
        value={username.value}
        onValue={setUsername}
        pattern={new RegExp(USERNAME)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} must only consist of letters, dashes, and underscores`}}
        onValidity={setUsernameValidity}
      />

      <InputWithStatus
        min={MIN_FIRSTNAME_LENGTH}
        max={MAX_FIRSTNAME_LENGTH}
        label="First name"
        value={firstname.value}
        onValue={setFirstname}
        pattern={new RegExp(FIRSTNAME)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} should only consist of letters, dashes, and underscores`}}
        onValidity={setFirstnameValidity}
      />

      <InputWithStatus
        min={MIN_LASTNAME_LENGTH}
        max={MAX_LASTNAME_LENGTH}
        label="Last name"
        value={lastname.value}
        onValue={setLastname}
        pattern={new RegExp(LASTNAME)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} should only consist of letters, dashes, and underscores`}}
        onValidity={setLastnameValidity}
      />

      <InputWithStatus
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        label="Password"
        value={password.value}
        onValue={setPassword}
        pattern={new RegExp(PASSWORD)}
        required={true}
        messages={{UNMATCHING: (label) => `${label} must only consists of: Letters, digits, dashes and underscores`}}
        onValidity={setPasswordValidity}
      />
      
      <button
        type="button"
        onClick={commit}
        disabled={!(validity === true && status === "idle")}
        children="Sign up!"
        className={btn.blue}
      />

      <hr className={type.hr} />

      <p>
        Already have an account? <Link to="/login" className={type.link}>Log In</Link>
      </p>
    </div>
  );
});


export default Form;