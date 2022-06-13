import AuthenticatorMiddleware from "../AuthenticatorMiddleware"
import AuthenticatorInitializerMiddlware from "../AuthenticatorInitializerMiddlware"


export function connectStyleFrameworkAbstractor() {
  return {
    AuthenticatorMiddleware: AuthenticatorMiddleware,
    AuthenticatorInitializerMiddlware: AuthenticatorInitializerMiddlware,
  }
} 


export default connectStyleFrameworkAbstractor