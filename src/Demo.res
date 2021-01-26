@genType.opaque
type name = string

@genType.opaque
type surname = string

type person = {
  name,
  surname,
};

@genType
type persons = array<person>;


type t = (string)=>unit
@genType.import(("path", "dirname"))
@bs.val external dirname: t = "dirname"
let root = dirname("/User/github")

type parse;
@genType.import(("@textlint/markdown-to-ast", "parse"))
@bs.val external parse: parse = "parse"