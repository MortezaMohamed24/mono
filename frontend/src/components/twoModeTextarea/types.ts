import React from "react";


export type Props = React.HTMLAttributes<HTMLTextAreaElement> & {
  meta?: Meta,
  value?: string | undefined;
  styled?: boolean | undefined;
  oneLine?: boolean | undefined;
  pattern?: RegExp | undefined;
  autoSize?: boolean | undefined;
  onChange?: (value: string) => void;
  onValidity?: {(isValid: boolean): void} | undefined;
  invalidClass?: string | undefined;
}

export interface Meta {
  set?(newValue: string): void; 
  blur?(): void;
  node?: HTMLTextAreaElement | null; 
  value?: string;
  reset?(): void;
  focus?(): void; 
  select?(): void;
}