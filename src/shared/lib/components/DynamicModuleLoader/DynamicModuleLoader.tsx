import {
  ReduxStoreWithManager,
  StateSchemaKeys,
} from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer;
};

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { reducers, children, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      store.reducerManager.add(keyName as StateSchemaKeys, reducer);
      dispatch({ type: `@@INIT ${keyName} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([keyName]) => {
        if (removeAfterUnmount) {
          dispatch({ type: `@@REMOVE ${keyName} reducer` });
          store.reducerManager.remove(keyName as StateSchemaKeys);
        }
      });
    };
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  return <>{children}</>;
};
