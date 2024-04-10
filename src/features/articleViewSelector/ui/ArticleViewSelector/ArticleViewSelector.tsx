import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from 'entities/Article';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Icon } from 'shared/UI/Icon/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewChange?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    Icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, onViewChange, view } = props;
  const { t } = useTranslation();

  const onClick = (view: ArticleView) => () => onViewChange?.(view);

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button theme={ButtonTheme.CLEAR} onClick={onClick(item.view)}>
          <Icon
            Svg={item.Icon}
            className={classNames('', {
              [cls.notSelected]: item.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
