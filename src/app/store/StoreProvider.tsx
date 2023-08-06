import React, {FC} from 'react';
import {persistor, store} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {IDefaultFC} from '../../shared/types';

const StoreProvider: FC<IDefaultFC> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export {StoreProvider};
