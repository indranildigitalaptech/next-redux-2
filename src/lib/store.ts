import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import counterReducer from '@/features/counter/counterSlice';
import usersReducer from '@/features/users/usersSlice';
import preferencesReducer from '@/features/preferences/preferencesSlice';
import { postsApi } from '@/features/posts/postsApi';
import storageSession from "redux-persist/lib/storage/session";

// Persist configuration for preferences
const persistConfig = {
    key: 'preferences',
    storage: storageSession,
};

const persistedPreferencesReducer = persistReducer(persistConfig, preferencesReducer);

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    preferences: persistedPreferencesReducer,
    [postsApi.reducerPath]: postsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(postsApi.middleware),
        preloadedState,
    });
    return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore['dispatch'];

// Export persistor type
export const makePersistor = (store: AppStore) => persistStore(store);
