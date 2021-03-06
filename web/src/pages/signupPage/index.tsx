import s from "./style"
import sp from "./state"
import Form from "./form"
import React from "react"
import Error from "./error"
import Loading from "../mainLoadingPage"
import {signup} from "./state"
import {Redirect} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"


const SignUpPage = React.memo(() => {
  const error = useSelector(sp.error)
  const status = useSelector(sp.status)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(sp.clear()) 
    
    return () => {
      dispatch(sp.clear())
    }
  }, [])


  let content: JSX.Element


  if (status === "idle") {
    content = <Form error={null} />
  } else if (status === "loading") {
    content = <Loading />
  } else if (status === "succeeded") {
    content = <Redirect to="/login" />
  } else {
    if ((
      error === signup.ERRORS.AUTH_UNKNOWN_USER_ERROR
    ) || (
      error === signup.ERRORS.AUTH_BAD_USERNAME_ERROR
    ) || (
      error === signup.ERRORS.AUTH_BAD_PASSWORD_ERROR
    ) || (
      error === signup.ERRORS.AUTH_MISSING_USERNAME_ERROR
    ) || (
      error === signup.ERRORS.AUTH_MISSING_PASSWORD_ERROR
    ) || (
      error === signup.ERRORS.AUTH_INCORRECT_PASSWORD_ERROR
    ) || (
      error === signup.ERRORS.AUTH_MISSING_CREDINTAILS_ERROR
    )) {
      content = <Form error={error} />
    } else {
      content = <Error error={error} />
    }
  }

  
  return (
    <main className={s.signup}>
      {content}
    </main>
  )
})


export default SignUpPage