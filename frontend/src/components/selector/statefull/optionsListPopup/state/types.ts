export type ID = symbol | string | number

export type Query = "prev" | "next" | number | QueryObject

export type QueryObject = Partial<Option>

export type Option = {
  name: string;
  label?: string;
}

export type SelectorState = {
  id?: undefined;
  isOpen: false;
  reference?: undefined;
} | {
  id: string | symbol | number;
  isOpen: true;
  reference: string;
}