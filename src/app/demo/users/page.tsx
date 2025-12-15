import Link from 'next/link';
import UsersList from '@/features/users/UsersList';

export default function UsersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                    <h1 className="text-5xl font-bold text-white mb-4 text-center">
                        Async API Fetching
                    </h1>
                    <p className="text-white/90 mb-8 text-center">
                        Using <code className="bg-white/20 px-2 py-1 rounded">createAsyncThunk</code> to fetch users from JSONPlaceholder API
                    </p>

                    <UsersList />

                    <div className="mt-8 text-center">
                        <Link
                            href="/"
                            className="text-white/70 hover:text-white underline transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
