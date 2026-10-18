// Purpose: Join conditional class names without pulling in a dependency.
// Author: Thang Truong
// Date: 2026-10-18

export const cn = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(" ");
