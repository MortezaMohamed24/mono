import outerElementPathOf from "./outerPathOf";


function isAbove(target: Element, node: Element) {
  if (!target) {
    return false;
  } else if (!(target instanceof Element)) {
    return false;
  } else if (target === node) {
    return false;
  } else {
    return !outerElementPathOf(target).includes(node);
  }
};


export default isAbove;