import "./state"

import {OPEN} from "./state"
import {JOIN} from "./state"
import {CLOSE} from "./state"
import {TOGGLE} from "./state"
import {FORWARD} from "./state"
import {BACKWARD} from "./state"
import {AnyAction} from "./state"
import {AllActions} from "./state"
import {PopupOpenAction} from "./state"
import {PopupJoinAction} from "./state"
import {PopupCloseAction} from "./state"
import {PopupToggleAction} from "./state"
import {PopupForwardAction} from "./state"
import {PopupBackwardAction} from "./state"
import {open} from "./state"
import {join} from "./state"
import {close} from "./state"
import {toggle} from "./state"
import {forward} from "./state"
import {backward} from "./state"
import {popupify} from "./popupify"
import {PopupToggler} from "./toggler"
import {TOGGLER_TYPE_ID} from "./toggler"
import {PopupTogglerMeta} from "./toggler"
import {PopupTogglerProps} from "./toggler"
import {PopupTogglerAction} from "./toggler"
import {PopupAutoCloser} from "./autoCloser"
import {PopupHeader} from "./header"
import popupStyle from "./style"


export {
  OPEN,
  JOIN,
  CLOSE,
  TOGGLE,
  FORWARD,
  BACKWARD,
  AnyAction,
  AllActions,
  PopupOpenAction,
  PopupJoinAction,
  PopupCloseAction,
  PopupToggleAction,
  PopupForwardAction,
  PopupBackwardAction,
  open,
  join,
  close,
  toggle,
  forward,
  backward,
  popupify,
  PopupToggler,
  TOGGLER_TYPE_ID,
  PopupTogglerMeta,
  PopupTogglerProps,
  PopupTogglerAction,
  PopupAutoCloser,
  PopupHeader,
  popupStyle,
  
  // Rexported with a different name for backwards compatablity, 
  // TODO: remove dependency
  PopupHeader as Header,
  // Rexported with a different name for backwards compatablity, 
  // TODO: remove dependency
  PopupToggler as Toggler,
}


export default popupify

// TODO: export this instead of the current default export
// export default Object.freeze({
//   OPEN,
//   JOIN,
//   CLOSE,
//   TOGGLE,
//   FORWARD,
//   BACKWARD,
//   PopupOpenAction,
//   PopupJoinAction,
//   PopupCloseAction,
//   PopupToggleAction,
//   PopupForwardAction,
//   PopupBackwardAction,
//   open,
//   join,
//   close,
//   toggle,
//   forward,
//   backward,
//   popupify,
//   PopupToggler,
//   TOGGLER_TYPE_ID,
//   PopupAutoCloser,
//   PopupHeader,
//   popupStyle,
// })