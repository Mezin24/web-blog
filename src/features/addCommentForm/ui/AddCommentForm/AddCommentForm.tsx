import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/getAddCommentFormData';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onChangeAddCommentFormText = useCallback(
    (value: string) => {
      dispatch(dispatch(addCommentFormActions.setText(value)));
    },
    [dispatch]
  );

  const sendCommentHandler = useCallback(() => {
    dispatch(addCommentFormActions.setText(''));
    onSendComment(text);
  }, [dispatch, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст сообщения')}
          onChange={onChangeAddCommentFormText}
          value={text}
        />
        <Button onClick={sendCommentHandler}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
