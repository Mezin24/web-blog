import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StoreDecorator(state: DeepPartial<StateSchema>) {
  return (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
}
