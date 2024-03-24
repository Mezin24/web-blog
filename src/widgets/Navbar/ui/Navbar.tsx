import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'entities/User/model/selectors/getUserData/getUserData';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserData);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onCloseHandler = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenHandler = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseHandler} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenHandler}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseHandler} />
    </div>
  );
};
