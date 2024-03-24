import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      type='button'
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
