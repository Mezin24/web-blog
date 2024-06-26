import { useSelector } from 'react-redux';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) return null;

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.item}>{t(item.text)}</span>
    </AppLink>
  );
});
