interface Document<TProjector, TProjection> {
  project(projector: TProjector): (
    | TProjection 
    | Promise<TProjection>
  )
}

async function projectMany<
  TDocument extends Document<TProjector, TProjection>,
  TProjector extends object,
  TProjection extends object,
>(docs: TDocument[], projecter: TProjector): Promise<TProjection[]> {
  const output: TProjection[] = []

  for (let doc of docs) {
    output.push(await doc.project(projecter))
  }

  return output
}

export {projectMany}
export default projectMany