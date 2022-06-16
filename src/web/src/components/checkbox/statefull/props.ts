import Meta from "./meta"; 
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLInputElement, {
  meta?: Meta | undefined;
  /** whether this checkbox should be pre checked */
  checked?: boolean | undefined;
  /** invoked passed `true` whenever this checkbox is checked */
  onCheck?(isChecked: boolean): void;  
  /** invoked passed a boolean whenever this checkbox is checked/unchecked */
  onChange?(isChecked: boolean): void;  
  /** invoked passed `true` whenever this checkbox is unchecked */
  onUncheck?(isChecked: boolean): void;  
  /** props to be assigned to the div element wrapping the checkbox */
  wrapperProps?: WithHTMLAttributes<HTMLDivElement, {}> | undefined;
}>


export default Props;