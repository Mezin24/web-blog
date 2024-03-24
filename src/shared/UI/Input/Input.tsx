import { classNames } from 'shared/lib/classNames/classNames';
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
  'value' | 'onChange'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  autofocus?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    value,
    className,
    onChange,
    placeholder,
    autoFocus,
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
      inputRef.current.focus();
    }
  }, [autoFocus, isMounted]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        ref={inputRef}
        className={cls.input}
        type={type}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
});
