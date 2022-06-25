const rem = (ids: string[], id: string) => {
  const index = ids.indexOf(id);
  if (index === -1) { return; }
  ids.splice(index, 1);
};


export default rem;