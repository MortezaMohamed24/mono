import open from "./open";
import join from "./join";
import close from "./close";
import forward from "./forward";
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