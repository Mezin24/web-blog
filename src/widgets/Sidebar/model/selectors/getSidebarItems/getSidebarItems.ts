import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'Главная',
      Icon: MainIcon,
    },
    {
      path: RoutePath.about,
      text: 'О нас',
      Icon: AboutIcon,
    },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}${authData.id}`,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
