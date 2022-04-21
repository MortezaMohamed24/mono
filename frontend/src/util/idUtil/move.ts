const move = (ids: string[], id: string, indexB: number = Infinity) => {
  const indexA = ids.indexOf(id);

  if (indexA === -1) { return; }

  ids.splice(indexA, 1);
  ids.splice(indexB, 0, id);
};


export default move;