import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import {persistedReducer} from './persistReducer';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
