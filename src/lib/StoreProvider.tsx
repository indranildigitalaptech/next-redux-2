'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, makePersistor, AppStore, RootState } from './store';
import { Persistor } from 'redux-persist';

export default function StoreProvider({
    children,
    initialState
}: {
    children: React.ReactNode,
    initialState?: Partial<RootState>
}) {
    const storeRef = useRef<AppStore | undefined>(undefined);
    const persistorRef = useRef<Persistor | undefined>(undefined);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore(initialState);
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
