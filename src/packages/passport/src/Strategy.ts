import * as express from "express"
import * as AuthenticatorFlowControl from "./AuthenticatorFlowControl"


export type Strategy = {
  (arg: StrategyArgument): StrategyReturn
}

export type StrategyReturn = (
  | AuthenticatorFlowControl.PassFlowControl
  | AuthenticatorFlowControl.FailFlowControl
  | AuthenticatorFlowControl.ErrorFlowControl
  | AuthenticatorFlowControl.SuccessFlowControl
  | AuthenticatorFlowControl.RedirectFlowControl
)

export type StrategyArgument = {
  request: express.Request
}


export default Strategy