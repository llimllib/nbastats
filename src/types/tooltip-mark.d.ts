// it's unclear to me why this doesn't work when included in the
// src/types/index.d.ts file, but :shrug: whatever
//
// docs: https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries
declare module "tooltip-mark" {
  export function tooltip(Plot: any): any;
}

declare module "htl";
