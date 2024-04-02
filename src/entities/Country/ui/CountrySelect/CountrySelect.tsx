import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/UI/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (country: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.ARMENIA, content: Country.ARMENIA },
  { value: Country.BULARUS, content: Country.BULARUS },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];

export const CountrySelect = ({
  className,
  value,
  onChange,
  readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation('profile');
  const onChangeCountry = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t('Выберите страну')}
      options={options}
      value={value}
      onChange={onChangeCountry}
      readonly={readonly}
    />
  );
};
