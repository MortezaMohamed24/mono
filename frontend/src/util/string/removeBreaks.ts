export const BREAK = /[\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/gu;

export function removeBreaks(string: string) {
  return string.replace(BREAK, "");
}

export default removeBreaks;