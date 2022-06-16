interface Serializer {
  (value: unknown): string
}



let serializer: Serializer = (value) => (
  JSON.stringify(value, null, 2)
)


function serialize(value: unknown) {
  return serializer(value)
}

function setSerializer(serializer: Serializer) {
  return serializer = serializer
}


export {
  serialize,
  setSerializer
}

export default serialize