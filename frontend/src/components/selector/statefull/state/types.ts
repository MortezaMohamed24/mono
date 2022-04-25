export type ID = symbol | string | number

export type Option = {
  name: string;
  label?: string;
}

export type SelectorState = {
  id?: undefined;
  isOpen: false;
  options?: undefined;
  selected?: undefined;
  reference?: undefined;
} | {
  id: string | symbol | number;
  isOpen: true;
  options: Option[];
  selected: number;
  reference: string;
}