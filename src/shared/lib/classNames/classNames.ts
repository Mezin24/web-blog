type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additionalCls?: string[]
): string => [
  cls,
  ...additionalCls.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, key]) => Boolean(key))
    .map(([cls]) => cls),
].join(' ');
