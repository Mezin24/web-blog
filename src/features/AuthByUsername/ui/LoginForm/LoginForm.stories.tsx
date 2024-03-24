import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({ loginForm: { password: '12', username: 'Test' } }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({ loginForm: { error: 'error' } })];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ loginForm: { password: '12', username: 'Test' } }),
];
