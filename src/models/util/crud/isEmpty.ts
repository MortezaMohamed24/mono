export default (obj: Record<string | number | symbol, unknown>) => {
  for (let key in obj) {
    if (obj[key] !== undefined) {
      return false;
    }
  }

  return true;
};