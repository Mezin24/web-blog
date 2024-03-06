import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          О нас
        </AppLink>
      </div>
    </div>
  );
};
