import DeepPartial from "/util/ts/deepPartial"

export type BaseOption = Readonly<{
  name: string;
  label: string;
}>

export type BaseNativeOption = Readonly<{
  name: string;
  label: string; 
  index: number;
}>

export type Nativify<T extends BaseOption> = Readonly<T & {
  index: number
}>

export type Querify<GivenOption extends BaseOption> = DeepPartial<
  Nativify<GivenOption>
>

export type UseSelectorState<GivenOption extends BaseOption> = Readonly<{
  length: number;
  isOpen: boolean;
  options: ReadonlyArray<Nativify<GivenOption>>;
  selected: null | Nativify<GivenOption>;
}>

export type UseSelectorReturn = Readonly<{
  isOpen: boolean;
  length: number;
  options: ReadonlyArray<BaseNativeOption>;
  selected: null | BaseNativeOption;

  set(options: BaseOption[]): void; 
  open(): void;
  close(): void;
  toggle(): void;
  select(query: Querify<BaseNativeOption>): void;
  indexOf(query: Querify<BaseNativeOption>): number; 
}>