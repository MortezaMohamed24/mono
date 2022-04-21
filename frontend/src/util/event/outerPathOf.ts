interface Event {
  target?: EventTarget | null | undefined;
}


export default function pathOf(event: Event) {
  if (!event.target) {
    return [];
  }

  let item: any = event.target;
  const path: Element[] = [];

  while (true) {
    if (!(item instanceof Element)) {
      return path;
    }

    path.push(item);

    item = item.parentNode;
  }
};