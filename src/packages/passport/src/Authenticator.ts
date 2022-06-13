declare namespace Authenticator {
  /**
   * 
  */
  interface User {

  }
}


const USER_KEY = Symbol("passport::USER_KEY")


interface AuthenticateOptions {
  /** A value representing the user */
  user: Authenticator.User
  /** 
   * Whether to save the user into the session
  */
  saveUserInSession?: boolean | undefined
}




import SessionManager from "./SessionManager"
import SessionStrategy from "./SessionStrategy.js"
// import require('./framework/connect')()



interface UseStrategyOptions {
  // TODO: Add strategy type
  name?: undefined | string
  strategy: {name?: string}
}

function Authenticator() {
  let _key = "passport"
  let _strategies = {}
  let _serializers = []
  let _deserializers = []
  let _infoTransformers = []
  let _frameworkAbstractor = null
  

  function useStrategy(options: UseStrategyOptions) {
    const name = options.name ?? options.strategy.name

    if (typeof name !== "string") { 
      throw new Error("Neither options no strategy has a name field: Cannot use a strategy without providing a name") 
    }
    
    _strategies[name] = options.strategy
  }

  function unuseStrategy(strategyName: string) {
    delete this.strategies[strategyName]
  }

  // TODO
  function setFrameworkAbstractor(newFrameworkAbstractor) {
    _frameworkAbstractor = newFrameworkAbstractor
  }

  function initialize(options) {
    return _frameworkAbstractor.initialize()
  }

  function authenticate({strategy, options} = {}) {
    return _frameworkAbstractor.authenticate(this, strategy, options)
  }

  function authorize({strategy, options} = {}) {
    const authorizer = (
      this._framework.authorize
    ) || (
      this._framework.authenticate
    )


    return authorizer({
      this: this, 
      options: options,
      strategy: strategy, 
      assignProperty: "account"
    })
  }

  
  function serializeUser(req) {
    return userSerializer(req.authenticator.user) 
  }

  function deserializeUser(request) {
    return userDeserializer(request.authenticator.user)
  }


  function isAuthenticated() {
    var property = this._userProperty || 'user'
    return (this[property]) ? true : false
  }

  /**
   * Registers a function used to transform auth info.
   *
   * In some circumstances authorization details are contained in authentication
   * credentials or loaded as part of verification.
   *
   * For example, when using bearer tokens for API authentication, the tokens may
   * encode (either directly or indirectly in a database), details such as scope
   * of access or the client to which the token was issued.
   *
   * Such authorization details should be enforced separately from authentication.
   * Because Passport deals only with the latter, this is the responsiblity of
   * middleware or routes further along the chain.  However, it is not optimal to
   * decode the same data or execute the same database query later.  To avoid
   * this, Passport accepts optional `info` along with the authenticated `user`
   * in a strategy's `success()` action.  This info is set at `req.authInfo`,
   * where said later middlware or routes can access it.
   *
   * Optionally, applications can register transforms to proccess this info,
   * which take effect prior to `req.authInfo` being set.  This is useful, for
   * example, when the info contains a client ID.  The transform can load the
   * client from the database and include the instance in the transformed info,
   * allowing the full set of client properties to be convieniently accessed.
   *
   * If no transforms are registered, `info` supplied by the strategy will be left
   * unmodified.
   *
   * Examples:
   *
   *     passport.transformAuthInfo(function(info, done) {
   *       Client.findById(info.clientID, function (err, client) {
   *         info.client = client
   *         done(err, info)
   *       })
   *     })
   *
   * @api public
   */
  function transformAuthInfo(fn, req, done) {
    if (typeof fn === 'function') {
      return this._infoTransformers.push(fn)
    }
    
    // private implementation that traverses the chain of transformers,
    // attempting to transform auth info
    var info = fn

    // For backwards compatibility
    if (typeof req === 'function') {
      done = req
      req = undefined
    }
    
    var stack = this._infoTransformers
    (function pass(i, err, tinfo) {
      // transformers use 'pass' as an error to skip processing
      if ('pass' === err) {
        err = undefined
      }
      // an error or transformed info was obtained, done
      if (err || tinfo) { return done(err, tinfo) }
      
      var layer = stack[i]
      if (!layer) {
        // if no transformers are registered (or they all pass), the default
        // behavior is to use the un-transformed info as-is
        return done(null, info)
      }
      
      
      function transformed(e, t) {
        pass(i + 1, e, t)
      }
      
      try {
        var arity = layer.length
        if (arity == 1) {
          // sync
          var t = layer(info)
          transformed(null, t)
        } else if (arity == 3) {
          layer(req, info, transformed)
        } else {
          layer(info, transformed)
        }
      } catch(e) {
        return done(e)
      }
    })(0)
  }
  
  /**
   * Middleware that will restore login state from a session.
   *
   * Web applications typically use sessions to maintain login state between
   * requests.  For example, a user will authenticate by entering credentials into
   * a form which is submitted to the server.  If the credentials are valid, a
   * login session is established by setting a cookie containing a session
   * identifier in the user's web browser.  The web browser will send this cookie
   * in subsequent requests to the server, allowing a session to be maintained.
   *
   * If sessions are being utilized, and a login session has been established,
   * this middleware will populate `req.user` with the current user.
   *
   * Note that sessions are not strictly required for Passport to operate.
   * However, as a general rule, most web applications will make use of sessions.
   * An exception to this rule would be an API server, which expects each HTTP
   * request to provide credentials in an Authorization header.
   *
   * Examples:
   *
   *     app.use(connect.cookieParser())
   *     app.use(connect.session({ secret: 'keyboard cat' }))
   *     app.use(passport.initialize())
   *     app.use(passport.session())
   *
   * Options:
   *   - `pauseStream`      Pause the request stream before deserializing the user
   *                        object from the session.  Defaults to _false_.  Should
   *                        be set to true in cases where middleware consuming the
   *                        request body is configured after passport and the
   *                        deserializeUser method is asynchronous.
   *
   * @param {Object} options
   * @return {Function} middleware
   * @api public
   */
  Authenticator.prototype.session = function(options) {
    return this.authenticate('session', options)
  }

  
  function getStrategy(name: string) {
    return _strategies[name]
  }
  

  function isUnauthenticated() {
    return !this.isAuthenticated()
  }

  async function authenticate_({user, saveUserInSession}: AuthenticateOptions) {
    var property = this._userProperty || 'user'
    
    this[property] = user
  
    if (session) {
      if (!this._passport) { throw new Error('passport.initialize() middleware not in use') }
      if (typeof done != 'function') { throw new Error('req#login requires a callback function') }
      
      var self = this
      this._passport.instance._sm.logIn(this, user, function(err) {
        if (err) { self[property] = null return done(err) }
        done()
      })
    } else {
      done && done()
    }
  }
 
  async function unauthenticate() {
    var property = this._userProperty || 'user'
    
    this[property] = null
    if (this._passport) {
      this._passport.instance._sm.logOut(this)
    }
  }


  if (!request._passport) { return this.error(new Error("passport.initialize() middleware not in use")) }


 
  

  // framework(require('./framework/connect')())
  use(new SessionStrategy({ key: this._key }, this.deserializeUser.bind(this)))
  sm = new SessionManager({ key: this._key }, this.serializeUser.bind(this))
}






// TODO: Make session manager pluggable
/*
Authenticator.prototype.sessionManager = function(mgr) {
  sm = mgr
  return this
}
*/