const matches = (query: {[key: string]: unknown}, opt: {[key: string]: unknown}) => {
  for (let [key, value] of Object.entries(query)) {
    if ((opt as any)[key] !== value) {
      return false;
    }
  }

  return true;
}


export default matches;