const add = (ids: string[], id: string, index: number = Infinity) => {
  if (Number.isFinite(index) && index >= 0) {
    ids.splice(index, 0, id);
  } else {
    ids.splice(Infinity, 0, id);
  }
};


export default add;