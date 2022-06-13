import {UseDispatch} from "./types";
import {UseSelector} from "./types";
import {useDispatch as plainUseDispatch} from "react-redux";
import {useSelector as plainUseSelector} from "react-redux"


export type useSelector = UseSelector;
export type useDispatch = UseDispatch;


export const useSelector = plainUseSelector as UseSelector;
export const useDispatch = plainUseDispatch as UseDispatch;