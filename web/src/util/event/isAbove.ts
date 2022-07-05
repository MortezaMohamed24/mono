import outerElementPathOf from "/util/dom/outerPathOf";


/**
 * Determines whether the target of `event` is not `node` and doesn't descend from
 * it in the DOM tree
 */
function isAbove({target}: Event, node: Element) {
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