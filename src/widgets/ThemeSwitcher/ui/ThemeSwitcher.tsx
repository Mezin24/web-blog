import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
