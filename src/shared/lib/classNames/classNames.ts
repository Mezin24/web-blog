type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additionalCls?: string[]
): string => {
  return [
    cls,
    ...additionalCls,
    ...Object.entries(mods)
      .filter(([_, key]) => Boolean(key))
      .map(([cls]) => cls),
  ].join(' ');
};
