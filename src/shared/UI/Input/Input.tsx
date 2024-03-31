import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    value,
    className,
    onChange,
    placeholder,
    autoFocus,
    readonly,
    type = 'text',
    ...otherProps
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (autoFocus && isMounted) {
      inputRef.current?.focus();
    }
  }, [autoFocus, isMounted]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        ref={inputRef}
        className={cls.input}
        type={type}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
