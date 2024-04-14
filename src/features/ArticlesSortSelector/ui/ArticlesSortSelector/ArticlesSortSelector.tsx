import { ArticleSortField } from 'entities/Article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/UI/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import cls from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (sort: ArticleSortField) => void;
  onChangeOrder: (order: SortOrder) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;
  const { t } = useTranslation();

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        content: t('Заголовку'),
        value: ArticleSortField.TITLE,
      },
      {
        content: t('Дате создания'),
        value: ArticleSortField.CREATED,
      },
      {
        content: t('Просмотрам'),
        value: ArticleSortField.VIEWS,
      },
    ],
    [t]
  );

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        content: t('возростанию'),
        value: 'asc',
      },
      {
        content: t('убыванию'),
        value: 'desc',
      },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select
        label={t('Сортировать по')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t('по')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
