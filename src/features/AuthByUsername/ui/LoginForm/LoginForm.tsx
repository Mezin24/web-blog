import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { Text, TextTheme } from 'shared/UI/Text/Text';
import cls from './LoginForm.module.scss';
import {
  loginFormActions,
  loginFormReducer,
} from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
  className?: string;
}
const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const store = useStore() as ReduxStoreWithManager;

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

  useEffect(() => {
    store.reducerManager.add('loginForm', loginFormReducer);
    dispatch({ type: '@@INIT LOGIN FORM' });

    return () => {
      dispatch({ type: '@@REMOVE LOGIN FORM' });
      store.reducerManager.remove('loginForm');
    };
    // eslint-disable-next-line
  }, []);

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

export default LoginForm;
