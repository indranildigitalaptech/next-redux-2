'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleTheme, setLanguage, toggleNotifications, PreferencesState } from './preferencesSlice';

export default function Preferences() {
    const { theme, language, notifications } = useAppSelector((state) => state.preferences);
    const dispatch = useAppDispatch();

    return (
        <div className={`transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <div className="grid gap-6">
                {/* Theme Toggle */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">Theme Mode</h3>
                        <span className="text-2xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
                    </div>
                    <p className="opacity-80 mb-4 text-sm">Current: {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
                    <button
                        onClick={() => dispatch(toggleTheme())}
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform active:scale-95 shadow-lg ${theme === 'dark'
                            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                            : 'bg-slate-800 text-white hover:bg-slate-700'
                            }`}
                    >
                        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                    </button>
                </div>

                {/* Language Selection */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">Language</h3>
                        <span className="text-2xl">🌐</span>
                    </div>
                    <p className="opacity-80 mb-4 text-sm">Select your interface language</p>
                    <div className="flex gap-2">
                        {[
                            { code: 'en', label: 'English', flag: '🇺🇸' },
                            { code: 'es', label: 'Español', flag: '🇪🇸' },
                            { code: 'fr', label: 'Français', flag: '🇫🇷' },
                        ].map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => dispatch(setLanguage(lang.code as PreferencesState['language']))} // Type assertion safe here
                                className={`flex-1 py-3 px-2 rounded-lg font-medium transition-all duration-200 ${language === lang.code
                                    ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400 ring-offset-2 ring-offset-transparent'
                                    : 'bg-white/20 hover:bg-white/30'
                                    }`}
                            >
                                <div className="text-xl mb-1">{lang.flag}</div>
                                <div className="text-xs">{lang.label}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notifications Toggle */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                Notifications
                                <span className="text-2xl">{notifications ? '🔔' : '🔕'}</span>
                            </h3>
                            <p className="opacity-80 text-sm mt-1">Receive alerts and updates</p>
                        </div>

                        <button
                            onClick={() => dispatch(toggleNotifications())}
                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${notifications ? 'bg-green-500' : 'bg-gray-600'
                                }`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${notifications ? 'translate-x-7' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                    <div className={`text-sm px-4 py-2 rounded-lg ${notifications ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>
                        Status: {notifications ? 'Enabled' : 'Disabled'}
                    </div>
                </div>
            </div>
        </div>
    );
}
