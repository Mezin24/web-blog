import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}
export const Select = memo((props: SelectProps) => {
  const { className, value, options, label, onChange, readonly } = props;
  const selectOptions = useMemo(
    () =>
      options.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
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
});
