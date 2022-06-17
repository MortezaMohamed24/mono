import {v4} from "uuid";
import {useState} from "react";


export function useID() {
  return useState(v4)[0];
}


export default useID;