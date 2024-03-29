export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additionalCls: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, key]) => Boolean(key))
      .map(([cls]) => cls),
  ].join(' ');
}
