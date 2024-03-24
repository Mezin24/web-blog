import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
recusandae quos laudantium fuga laboriosam vero. Aut consequatur eaque
voluptatem deleniti minus quidem odio magnam! Quas eos eum non impedit
nisi.`;

export const Primary = Template.bind({});
Primary.args = {
  children: loremText,
  title: 'This is my title',
  text: loremText,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  children: loremText,
  title: 'This is my title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  children: loremText,
  text: loremText,
};

export const Dark = Template.bind({});
Dark.args = {
  children: loremText,
  title: 'This is my title',
  text: loremText,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  children: loremText,
  title: 'This is my title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  children: loremText,
  text: loremText,
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  children: loremText,
  title: 'This is my title',
  text: loremText,
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  children: loremText,
  title: 'This is my title',
  text: loremText,
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
