import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={throwError}>{t('Вызвать ошибку')}</Button>;
};
