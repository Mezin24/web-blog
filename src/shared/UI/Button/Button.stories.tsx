import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  square: true,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  square: true,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  square: true,
};

export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  square: true,
};
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  square: true,
};

export const SquareSizeXlDark = Template.bind({});
SquareSizeXlDark.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  square: true,
};
SquareSizeXlDark.decorators = [ThemeDecorator(Theme.DARK)];
