import {Dispatch} from ".";
import {useDispatch as plainUseDispatch} from "react-redux";


export type UseDispatch = () => Dispatch
export const useDispatch = plainUseDispatch as UseDispatch;


export default useDispatch;