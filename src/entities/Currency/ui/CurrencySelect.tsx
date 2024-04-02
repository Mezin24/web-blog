import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/UI/Select/Select';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (currency: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.US, content: Currency.US },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = ({
  className,
  value,
  onChange,
  readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation('profile');
  const onChangeCurrency = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t('Выберите валюту')}
      options={options}
      value={value}
      onChange={onChangeCurrency}
      readonly={readonly}
    />
  );
};
