type Meta = {
  /** The `HTMLDivElement` wrapping the checkbox */
  wrapper?: HTMLDivElement | null;
  /** The checkbox itself (which is an `HTMLInputElement`) */
  checkbox?: HTMLInputElement | null;
  /** sets this checkbox as checked */
  check?(): void;
  /** whether this checkbox is currently checked */
  checked?: boolean;
  /** if this checkbox is checked, it sets it as unchecked, else, as checked */
  toggle?(): void;
  /** sets this checkbox as unchecked */
  uncheck?(): void;
}


export default Meta;