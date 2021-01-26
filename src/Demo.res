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

@genType.import("@textlint/markdown-to-ast")
type parser;

@genType.import(("path", "dirname"))
type t = (string)=>unit

@bs.val external dirname: t = "dirname"
let root = dirname("/User/github")