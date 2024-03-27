import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
