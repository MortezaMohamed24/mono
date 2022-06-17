import {TabComponent} from "../tabify";


export interface Tab {
  readonly id: symbol;
  readonly Component: TabComponent;
}

export interface HistoryEntry {
  readonly id: symbol;
  readonly Component: TabComponent;
  readonly backwardable: boolean;
}