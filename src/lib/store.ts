import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            users: usersReducer,
            preferences: persistedPreferencesReducer,
            [postsApi.reducerPath]: postsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(postsApi.middleware),
    });
    return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Export persistor type
export const makePersistor = (store: AppStore) => persistStore(store);
