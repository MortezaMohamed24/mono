export default function omit(keysToOmit: string[], obj: {[key: string]: unknown}): {[key: string]: unknown} {
  const output: {[key: string]: unknown} = {};

  for (let key in obj) {
    if (!keysToOmit.includes(key)) {
      output[key] = obj[key];
    }
  }

  return output;
};