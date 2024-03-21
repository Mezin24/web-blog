import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        // value={value}
        // onChange={setValue}
        placeholder={t('Введите username')}
        autoFocus
      />
      <Input
        // value={value}
        // onChange={setValue}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('Войти')}
      </Button>
    </div>
  );
};
