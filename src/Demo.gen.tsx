/* TypeScript file generated from Demo.res by genType. */
/* eslint-disable import/first */

import { dirname as dirnameNotChecked } from "path";

import { parse as parseNotChecked } from "@textlint/markdown-to-ast";

// In case of type error, check the type of 'dirname' in 'Demo.re' and 'path'.
export const dirnameTypeChecked: t = dirnameNotChecked;

// Export 'dirname' early to allow circular import from the '.bs.js' file.
export const dirname: unknown = dirnameTypeChecked as t;

// In case of type error, check the type of 'parse' in 'Demo.re' and '@textlint/markdown-to-ast'.
export const parseTypeChecked: parse = parseNotChecked;

// Export 'parse' early to allow circular import from the '.bs.js' file.
export const parse: unknown = parseTypeChecked as parse;

// tslint:disable-next-line:max-classes-per-file
// tslint:disable-next-line:class-name
export abstract class name {
  protected opaque!: any;
} /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file
// tslint:disable-next-line:class-name
export abstract class surname {
  protected opaque!: any;
} /* simulate opaque types */

// tslint:disable-next-line:interface-over-type-literal
export type person = { readonly name: name; readonly surname: surname };

// tslint:disable-next-line:interface-over-type-literal
export type persons = person[];

// tslint:disable-next-line:interface-over-type-literal
export type t = (_1: string) => void;

// tslint:disable-next-line:max-classes-per-file
// tslint:disable-next-line:class-name
export abstract class parse {
  protected opaque!: any;
} /* simulate opaque types */
