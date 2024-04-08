import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from 'features/addCommentForm/model/selectors/getAddCommentFormData';

describe('addCommentForm', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: 'test' },
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe('test');
  });
  test('should work with empty state text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {},
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe('');
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { error: 'test' },
    };

    expect(getAddCommentFormError(state as StateSchema)).toBe('test');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {},
    };

    expect(getAddCommentFormError(state as StateSchema)).toBe('');
  });
});
