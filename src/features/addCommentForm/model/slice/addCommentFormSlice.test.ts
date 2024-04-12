import { AddCommentFormSchema } from '../types/AddCommentFormSchema';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: 'test',
    };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('test')
      )
    ).toEqual({
      text: 'test',
    });
  });
});
