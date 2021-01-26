/* TypeScript file generated from Demo.res by genType. */
/* eslint-disable import/first */


import {dirname as $$t} from 'path';

import {parser as $$parser} from '@textlint/markdown-to-ast';

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class name { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class surname { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:interface-over-type-literal
export type person = { readonly name: name; readonly surname: surname };

// tslint:disable-next-line:interface-over-type-literal
export type persons = person[];

// tslint:disable-next-line:interface-over-type-literal
export type parser = $$parser;

// tslint:disable-next-line:interface-over-type-literal
export type t = $$t;
