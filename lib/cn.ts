export type ClassValue = string | false | null | undefined;

/** Minimal class-name joiner. Avoids pulling in `clsx` for a one-line need. */
export const cn = (...values: ClassValue[]): string =>
  values.filter(Boolean).join(" ");
