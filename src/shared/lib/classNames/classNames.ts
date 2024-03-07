type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additionalCls: string[] = []
): string {
  return [
    cls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, key]) => Boolean(key))
      .map(([cls]) => cls),
  ].join(' ');
}
