import {persistReducer} from 'redux-persist';

import {rootReducer} from './rootReducer';
import {MMKV_STORAGE} from './MMKVStorage';

/**
 * Config for redux-persist
 */
const persistConfig = {
  key: 'root',
  version: 1,
  storage: MMKV_STORAGE,
  whitelist: ['TODO'],
};

/**
 * Initializing of redux and redux-persist
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer};
