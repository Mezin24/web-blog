import { ChangeEvent, useCallback, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, value, options, label, onChange, readonly } = props;
  const selectOptions = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
        disabled={readonly}
      >
        {selectOptions}
      </select>
    </div>
  );
};
