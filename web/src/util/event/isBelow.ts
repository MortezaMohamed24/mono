import outerElementPathOf from "/util/dom/outerPathOf";


/**
 * Determines whether the target of `event` descend from `node` in the DOM tree
 */
function isBelow({target}: Event, node: HTMLElement) {
  if (!target) {
    return false;
  } else if (!(target instanceof Element)) {
    return false;
  } else if (target === node) {
    return false;
  } else {
    return outerElementPathOf(target).includes(node);
  }
};


export default isBelow;