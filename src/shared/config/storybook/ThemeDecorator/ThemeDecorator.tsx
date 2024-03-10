import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
  return (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
}
