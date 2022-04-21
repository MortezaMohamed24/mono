import {INVALID} from "../constants";


const AsBoolean = (checkableOrOperator: (value: unknown) => unknown | INVALID) => (
  (value: unknown) => (
    checkableOrOperator(value) === INVALID ? false : true
  )
);


export default AsBoolean;