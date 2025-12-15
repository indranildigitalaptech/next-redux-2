import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PreferencesState {
    theme: 'light' | 'dark';
    language: 'en' | 'es' | 'fr';
    notifications: boolean;
}

const initialState: PreferencesState = {
    theme: 'light',
    language: 'en',
    notifications: true,
};

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setLanguage: (state, action: PayloadAction<PreferencesState['language']>) => {
            state.language = action.payload;
        },
        toggleNotifications: (state) => {
            state.notifications = !state.notifications;
        },
    },
});

export const { toggleTheme, setLanguage, toggleNotifications } = preferencesSlice.actions;
export default preferencesSlice.reducer;
