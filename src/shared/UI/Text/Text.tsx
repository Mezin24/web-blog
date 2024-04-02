import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  );
});
