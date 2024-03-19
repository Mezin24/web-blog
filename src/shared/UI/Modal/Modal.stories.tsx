import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
recusandae quos laudantium fuga laboriosam vero. Aut consequatur eaque
voluptatem deleniti minus quidem odio magnam! Quas eos eum non impedit
nisi.`;

export const Primary = Template.bind({});
Primary.args = {
  children: loremText,
};

export const Dark = Template.bind({});
Dark.args = {
  children: loremText,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
