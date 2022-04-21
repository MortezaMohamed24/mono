/**
 * `"d"` is for `preventDefault`
 * 
 * `"p"` is for `stopPropagation`
 * 
 * `"ip"` is for `stopImmediatePropagation`
 * 
 * and the rest are combinations of them
 */
export type StopCode = "d" | "p" | "ip" | "dp" | "dip";


export interface Stopable {
  preventDefault(): void;
  stopPropagation(): void;
  stopImmediatePropagation?(): void;
}

export const stop = (event: Stopable, code: StopCode = "dip") => {
  switch (code) {
    case "d": 
      event.preventDefault();
      break;
    case "p":
      event.stopPropagation();
      break;
    case "ip":
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        event.stopPropagation();  
      }
      break;
    case "dp": 
      event.preventDefault();
      event.stopPropagation();
      break;
    case "dip":
      event.preventDefault();
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        event.stopPropagation();  
      }
      break;
  }
};


export default stop;