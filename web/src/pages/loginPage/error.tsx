import s from "./style"
import lg from "./state"
import btn from "/style/button/style"
import React from "react"
import {login} from "./state"
import typeography from "/style/typeography/style"
import {useDispatch} from "/store"
import {useSelector} from "/store"


interface Props {
  error: unknown
}


const Error = React.memo<Props>(({error}) => {
  const dispatch = useDispatch()
  const username = useSelector(lg.username.value)


  function reset() {
    dispatch(lg.clear())
  }

  return (
    <div className={s.error}>

      <h1 className={typeography.para}>
        { 
          error === login.ERRORS.CONNECTION_ERROR
              ? "Couldn't connect to the server, check your connection and proxy settings or try again later"
              : error === login.ERRORS.WRONG_USERNAME_ERROR
                ? `There is no user with the username "${username}"`
                : error === login.ERRORS.WRONG_PASSWORD_ERROR
                  ? "Password is incorrect"
                  : "Unexpected error occourd. \nTry reloading the page."
        }
      </h1>

      <button type="button" onClick={reset} className={btn.gray}>
        Back to form
      </button>

    </div>
  )
})


export default Error