import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { Text, TextTheme } from 'shared/UI/Text/Text';
import { getLoginForm } from '../../model/selectors/getLoginForm/getLoginForm';
import cls from './LoginForm.module.scss';
import { loginFormActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, isLoading, error } = useSelector(getLoginForm);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text text={t('Вы ввели неверный пароль')} theme={TextTheme.ERROR} />
      )}
      <Input
        value={username}
        onChange={onChangeUsername}
        placeholder={t('Введите username')}
        autoFocus
      />
      <Input
        value={password}
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
      />
      <Button
        onClick={onLoginClick}
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
