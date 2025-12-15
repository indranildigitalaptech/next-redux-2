'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, makePersistor, AppStore } from './store';
import { Persistor } from 'redux-persist';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | undefined>(undefined);
    const persistorRef = useRef<Persistor | undefined>(undefined);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        persistorRef.current = makePersistor(storeRef.current);
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current!}>
                {children}
            </PersistGate>
        </Provider>
    );
}
