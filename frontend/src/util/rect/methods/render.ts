import Rect from "../types";


interface Config {
  action?: "position" | "size" | "both";
  duration?: number | null;
}


function render(this: Rect, element: HTMLElement, {action, duration}: Config = {}) {
  const transitions = [];


  if (action !== "size") {
    element.style.top = `${this.top}`;
    element.style.left = `${this.left}`;
    element.style.position = "fixed";

    if (duration) {
      transitions.push(
        `top ${duration}ms`,
        `left ${duration}ms`, 
      );
    }
  }

  if (action !== "position") {
    element.style.width = `${this.width}px`;
    element.style.height = `${this.height}px`;

    if (duration) {
      transitions.push(
        `width ${duration}ms`,
        `height ${duration}ms`,
      );
    }
  }


  if (transitions.length > 0) {
    element.style.transition = transitions.join(", ");
  }
}


export default render;