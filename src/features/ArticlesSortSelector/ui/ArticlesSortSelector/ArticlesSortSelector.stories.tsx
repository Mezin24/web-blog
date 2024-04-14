import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesSortSelector } from './ArticlesSortSelector';

export default {
  title: 'shared/ArticlesSortSelector',
  component: ArticlesSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticlesSortSelector>;

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => <ArticlesSortSelector { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};