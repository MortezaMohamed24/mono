import React from "react";


export interface Meta {
  set?(newValue: string): void; 
  blur?(): void;
  reset?(): void;
  focus?(): void; 
  select?(): void;
}

export interface Props {
  meta?: Meta;
  value?: string;
  onNode?(node: HTMLInputElement | null): void;
  onChange?(value: string): void;
  onValidity?(isValid: boolean): void;
  
  View?: "h1" | "h2" | "h3" | "h4" | "h6" | "p";
  viewClass?: string,
  viewProps?: React.HTMLAttributes<HTMLElement>,

  styled?: boolean | undefined;
  inputClass?: string,
  inputProps?: React.AllHTMLAttributes<HTMLInputElement>,
}