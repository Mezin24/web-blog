import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({ loginForm: { password: '12', username: 'Test' } }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ loginForm: { password: '12', username: 'Test' } }),
];
