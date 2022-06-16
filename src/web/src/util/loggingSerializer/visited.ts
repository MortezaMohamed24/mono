export default class Visited {
  #paths: [string, unknown][] = [];


  push(path: string, value: unknown) {
    this.#paths.push([path, value]);
  }

  
  pathOf(value: unknown) {
    if (typeof value === "object" && value !== null) {
      return this.#paths.find(([path, valueAtPath]) => value === valueAtPath)?.[0];
    } else {
      return null;
    }
  }
}