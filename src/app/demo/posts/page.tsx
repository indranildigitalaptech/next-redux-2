import Link from 'next/link';
import PostsList from '@/features/posts/PostsList';

export default function PostsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                    <h1 className="text-5xl font-bold text-white mb-4 text-center">
                        RTK Query Demo
                    </h1>
                    <p className="text-white/90 mb-8 text-center">
                        Advanced data fetching with <code className="bg-white/20 px-2 py-1 rounded">RTK Query</code> - automatic caching and refetching
                    </p>

                    <PostsList />

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
