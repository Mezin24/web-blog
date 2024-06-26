import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test select',
  options: [
    {
      value: '123',
      content: 'First option',
    },
    {
      value: '1234',
      content: 'Second option',
    },
  ],
};
