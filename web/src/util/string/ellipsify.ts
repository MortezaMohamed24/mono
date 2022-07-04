export default (txt: string, maxLength: number) => (
  txt.length <= maxLength ? (
    txt
  ) : (
    txt.substr(0, maxLength + 3).replace(/\s+$/, "") + "..."
  )
);