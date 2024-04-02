import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        name: 'Pavel',
        age: 36,
        lastname: 'Test',
        avatar:
          'https://orhaajans.com/wp-content/uploads/2020/01/ozz-1024x614_c.jpg',
        city: 'Obnisk',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        username: 'username',
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        name: 'Pavel',
        age: 36,
        lastname: 'Test',
        avatar:
          'https://orhaajans.com/wp-content/uploads/2020/01/ozz-1024x614_c.jpg',
        city: 'Obnisk',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        username: 'username',
      },
    },
  }),
];
