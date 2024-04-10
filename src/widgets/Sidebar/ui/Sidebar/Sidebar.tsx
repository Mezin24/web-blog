import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <menu
      data-testid='sidebar'
      className={classNames(
        cls.Sidebar,
        {
          [cls.collapsed]: collapsed,
        },
        [className]
      )}
    >
      <Button
        data-testid='sidebar-toggle'
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cls.collapsedBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem collapsed={collapsed} item={item} key={item.path} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
