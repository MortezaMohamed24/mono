import open from "./functions/open";
import join from "./functions/join";
import close from "./functions/close";
import forward from "./functions/forward";
import backward from "./functions/backward";
import {OPEN} from "../actions";
import {JOIN} from "../actions";
import {CLOSE} from "../actions";
import {FORWARD} from "../actions";
import {BACKWARD} from "../actions";
import {useReducer} from "/store";


useReducer(OPEN, ({popups}, {payload}) => {
  open(popups, payload);
});

useReducer(JOIN, ({popups}, {payload}) => {
  join(popups, payload);
});

useReducer(CLOSE, ({popups}, {payload}) => {
  close(popups, payload);
});

useReducer(FORWARD, ({popups}, {payload}) => {
  forward(popups, payload);
});

useReducer(BACKWARD, ({popups}, {payload}) => {
  backward(popups, payload);
});