import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export function ThemeDecorator(theme: Theme) {
  return (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
}
