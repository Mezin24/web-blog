import { StateSchema } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const state = useSelector((state: StateSchema) => state.profile);
  console.log(state);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>{t('Profile page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
