import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLInputElement, {
  /** whether this checkbox is currently checked */
  checked?: boolean | undefined;
  /** invoked passed a boolean whenever this checkbox is checked/unchecked */
  onChange?(isChecked: boolean): void;  
  /** invoked passed the `HTMLDivElement` wrapping the checkbox after the component mounts */
  onWrapper?(wrapper: HTMLDivElement | null): void;
  /** invoked passed the checkbox (which is an `HTMLInputElement`) after the component mounts */
  onCheckbox?(checkbox: HTMLInputElement | null): void;
  /** props to be assigned to the `HTMLDivElement` wrapping the checkbox */
  wrapperProps?: WithHTMLAttributes<HTMLDivElement, {}> | undefined;
}>


export default Props;