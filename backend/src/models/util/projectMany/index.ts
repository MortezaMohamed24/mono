export default async function projectMany<
  Document extends {project: (projector: Projector) => Promise<Projection>},
  Projector extends object,
  Projection extends object,
>(docs: Document[], projecter: Projector): Promise<Projection[]> {
  const output: Projection[] = [];

  for (let doc of docs) {
    output.push(await doc.project(projecter));
  }

  return output;
}