'use client';

import Link from 'next/link';
import Preferences from '@/features/preferences/Preferences';

export default function PersistDemoPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-2xl mx-4 w-full">
                <h1 className="text-5xl font-bold text-white mb-4 text-center">User Preferences</h1>

                <p className="text-white/90 mb-8 text-center">
                    These settings are persisted to localStorage. <br />
                    Change them, then <strong>refresh the page</strong> to see they are saved!
                </p>

                {/* Preferences Component */}
                <div className="mb-8">
                    <Preferences />
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-4">
                    <p className="text-white/80 text-sm text-center">
                        💡 <strong>Tech Note:</strong> The entire <code>preferences</code> Redux slice is automatically saved to <code>localStorage</code> and rehydrated on app start.
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        href="/"
                        className="text-white/70 hover:text-white underline transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
