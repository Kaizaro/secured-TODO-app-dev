import {persistReducer} from 'redux-persist';

import {rootReducer} from './rootReducer';
import {MMKV_STORAGE} from './MMKVStorage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: MMKV_STORAGE,
  whitelist: ['TODO'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer};
