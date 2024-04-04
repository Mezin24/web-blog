import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        ArticleImageBlockComponent
      </div>
    );
  }
);
