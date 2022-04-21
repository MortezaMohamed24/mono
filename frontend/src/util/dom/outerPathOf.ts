export default function outerElementPathOf(node: Element) {
  let parent: Element = node;
  const path: Element[] = [];

  while (parent) {
    path.push(parent);

    if (parent.parentElement) {
      parent = parent.parentElement;
    } else {
      break;
    }
  }

  return path;
};