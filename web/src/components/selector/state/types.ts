export type ID = (
  string
)

export type Option<TOption extends {} = {}> = (
  & {
      shortName: string;
      longName?: undefined | string;
    } 
  & TOption
)

export type Query<TOption extends {} = {}> = (
  | "prev" 
  | "next" 
  | number 
  | QueryObject<TOption>
)

export type QueryObject<TOption extends {} = {}> = (
  Partial<Option<TOption>>
)

export type Selector<TOption extends {} = {}> = {
  id: ID;
  options: Option<TOption>[];
  caption: string;
  selected: number;
  noOptionsMessage: string;
}

export type State = {
  [Key in ID]?: Selector
}