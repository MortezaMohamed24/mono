import http from "node:http"
import AuthenticationError from "./lib/AuthenticationError"


interface Options {
  strategyNames: string[]
  assignProperty?: undefined | string
  successFlash?: undefined | string
  successMessage?: undefined | string
  successRedirect?: undefined | string
  failureFlash?: undefined | string
  failureMessage?: undefined | string
  failureRedirect?: undefined | string
  saveAuthenticationStateInSession?: undefined | boolean
}

/**
 * Authenticates requests.
 *
 * Applies the `name`ed strategy (or strategies) to the incoming request, in
 * order to authenticate the request.  If authentication is successful, the user
 * will be logged in and populated at `req.user` and a session will be
 * established by default.  If authentication fails, an unauthorized response
 * will be sent.
 *
 * Options:
 *   - `session`          Save login state in session, defaults to _true_
 *   - `successRedirect`  After successful login, redirect to given URL
 *   - `successMessage`   True to store success message in
 *                        req.session.messages, or a string to use as override
 *                        message for success.
 *   - `successFlash`     True to flash success messages or a string to use as a flash
 *                        message for success (overrides any from the strategy itself).
 *   - `failureRedirect`  After failed login, redirect to given URL
 *   - `failureMessage`   True to store failure message in
 *                        req.session.messages, or a string to use as override
 *                        message for failure.
 *   - `failureFlash`     True to flash failure messages or a string to use as a flash
 *                        message for failures (overrides any from the strategy itself).
 *   - `assignProperty`   Assign the object provided by the verify callback to given property
 *
 * An optional `callback` can be supplied to allow the application to override
 * the default manner in which authentication attempts are handled.  The
 * callback has the following signature, where `user` will be set to the
 * authenticated user on a successful authentication attempt, or `false`
 * otherwise.  An optional `info` argument will be passed, containing additional
 * details provided by the strategy"s verify callback - this could be information about
 * a successful authentication or a challenge message for a failed authentication.
 * An optional `status` argument will be passed when authentication fails - this could
 * be a HTTP response code for a remote authentication failure or similar.
 *
 *     app.get("/protected", function(req, res, next) {
 *       passport.authenticate("local", function(err, user, info, status) {
 *         if (err) { return next(err) }
 *         if (!user) { return res.redirect("/signin") }
 *         res.redirect("/account")
 *       })(req, res, next)
 *     })
 *
 * Note that if a callback is supplied, it becomes the application"s
 * responsibility to log-in the user, establish a session, and otherwise perform
 * the desired operations.
 *
 * Examples:
 *
 *     passport.authenticate("local", { successRedirect: "/", failureRedirect: "/login" })
 *
 *     passport.authenticate("basic", { session: false })
 *
 *     passport.authenticate("twitter")
 *
 * @param {Strategy|String|Array} name
 * @param {Object} options
 * @param {Function} callback
 * @return {Function}
 * @api public
 */

function AuthenticatorMiddleware(options: Options) {
  const failureFlash = options.failureFlash
  const strategyNames = options.strategyNames 
  const authenticator = options.authenticator 
  const failWithError = options.failWithError
  const failureMessage = options.failureMessage
  const failureRedirect = options.failureRedirect 
  const failureFlashType = options.failureFlashType
  const failureFlashMessage = options.failureFlashMessage
  const storeFailureMessage = options.storeFailureMessage


  return (request, response, next) => {
    // accumulator for failures from each strategy in the chain
    const failures = []
    

    for (let name of strategyNames) {
      const strategy = authenticator.getStrategy(name)

      if (!strategy) {
        throw new Error(`Did not find a strategy named "${name}", you most likey forgot to add it or misnamed to vie authenticatot.useStrategy()`)
      }

      const action = strategy({request, options})

      onAction({
        next,
        action,
        request,
        response,
        failures,
      })

      if (action.type === "fail") {
        continue
      } else {
        return
      }
    }


    onAuthenticationFailure({
      next,
      request,
      response,
      failures,
      failWithError,
      failureFlash,
      failureMessage,
      failureRedirect,
      storeFailureMessage,
    })
  }
}



function onAction({next, action, request, response, failures}) {
  switch (action.type) {
    case "pass": 
      onPass({next}) 
      return true
    
    case "fail":
      onFail({status: action.status, failures: failures, challenge: action.challenge})
      return true

    case "error": 
      onError({error: action.error, callback: undefined})
      return false

    case "success": 
      onSuccess({
        user: action.user,
        info: action.info,
        request: request,
        successFlashMessage: "",
      })
      return true

    case "redirect": 
      onRedirect({url: action.url, status: action.status, response: response})
      return true

    default:
      throw new Error("Unknown action type: " + action.type)
  }
}


function onFail({status, failures, challenge}) {
  failures.push({ 
    status: status,
    challenge: challenge, 
  })
}

function onPass({next}) {
  next()
}

function onError({error, callback}) {
  if (callback) {
    return callback(error)
  }
  
  next(error)
}

function onSuccess({user, info = {}, request, successFlashMessage}) {
  if ("callback") {
    return "callback(null, user, info)"
  }

  const flashType = info.type ?? "success" 
  const flahsMessage = info.message ?? successFlashMessage,


  if (flashType && flahsMessage) {
    request.flash(flashType, flahsMessage)
  }

  if (flahsMessage) {
    request.session.messages = request.session.messages || []
    request.session.messages.push(flahsMessage)
  }

  if (assignProperty) {
    // TODO: ASSIGN USER TO AUTHENTICATIR INSTANCE ON REQUEST
    request[options.assignProperty] = user
    return next()
  }

  try {
    request.authenticator.authenticate({user, options})
  } catch (error) {
    return next()
  }

  function(err) {
    function complete() {
      if (options.successReturnToOrRedirect) {
        var url = options.successReturnToOrRedirect
        if (request.session && request.session.returnTo) {
          url = request.session.returnTo
          delete request.session.returnTo
        }
        return response.redirect(url)
      }
      if (options.successRedirect) {
        return response.redirect(options.successRedirect)
      }
      next()
    }
    
    if (options.authInfo !== false) {
      passport.transformAuthInfo(info, request, function(err, tinfo) {
        if (err) { return next(err) }
        request.authInfo = tinfo
        complete()
      })
    } else {
      complete()
    }
  }
}

function onRedirect({url, status = 302, response}) {
  response.statusCode = status
  response.setHeader("Location", url)
  response.setHeader("Content-Length", "0")
  response.end()
}


function onAuthenticationFailure({
  next,
  request,
  response,
  failures,
  failWithError,
  failureFlash,
  failureMessage,
  failureRedirect,
  storeFailureMessage,
}) {
  if (callback) {
    var challenges = failures.map(function(f) { return f.challenge })
    var statuses = failures.map(function(f) { return f.status })
    return callback(null, false, challenges, statuses)
  }
  
  // Strategies are ordered by priority.  For the purpose of flashing a
  // message, the first failure will be displayed.
  let failure = failures[0] || {}
  let challenge = failure.challenge || {}

  if (failureFlash) {
    request.flash(
      failureFlashType || challenge.type || "error", 
      failureFlashMessage || challenge.message,
    )
  }

  if (storeFailureMessage) {
    const message = failureMessage || challenge.message

    if (message) {
      if (!request.session.messages) {
        request.session.messages = []
      }
      
      request.session.messages.push(message)
    }
  }

  if (failureRedirect) {
    response.redirect(failureRedirect)
    return
  }

  // When failure handling is not delegated to the application, the default
  // is to respond with 401 Unauthorized.  Note that the WWW-Authenticate
  // header will be set according to the strategies in use (see
  // actions#fail).  If multiple strategies failed, each of their challenges
  // will be included in the response.

  let status
  let responseStatus
  let responseChallengeMessages = []
  
  const failuresLength = failures.length 

  for (let i = 0; i < failuresLength; i++) {
    failure = failures[i]
    status = failure.status
    challenge = failure.challenge
      
    responseStatus = responseStatus || status

    if (challenge?.message) {
      responseChallengeMessages.push(challenge)
    }
  }


  response.statusCode = responseStatus ?? 401

  if (response.statusCode == 401 && responseChallengeMessages.length > 0) {
    response.setHeader("WWW-Authenticate", responseChallengeMessages.join(", "))
  }

  if (failWithError) {
    return next(new AuthenticationError(http.STATUS_CODES[response.statusCode], responseStatus))
  } else {
    response.end(http.STATUS_CODES[response.statusCode])
  }
}


export default AuthenticatorMiddleware