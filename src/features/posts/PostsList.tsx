'use client';

import { useState } from 'react';
import { useGetPostsQuery, useCreatePostMutation } from './postsApi';

export default function PostsList() {
    const { data: posts, error, isLoading, isFetching, refetch } = useGetPostsQuery();
    const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
    const [showAll, setShowAll] = useState(false);

    const handleCreatePost = async () => {
        try {
            await createPost({
                title: 'New Post from RTK Query',
                body: 'This is a new post created using RTK Query mutation!',
                userId: 1,
            }).unwrap();
            refetch();
        } catch (err) {
            console.error('Failed to create post:', err);
        }
    };

    const displayedPosts = showAll ? posts : posts?.slice(0, 10);

    return (
        <div className="space-y-6">
            <div className="flex gap-4 justify-center flex-wrap">
                <button
                    onClick={() => refetch()}
                    disabled={isFetching}
                    className="px-6 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
                >
                    {isFetching ? 'Refreshing...' : 'Refresh Posts'}
                </button>
                <button
                    onClick={handleCreatePost}
                    disabled={isCreating}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
                >
                    {isCreating ? 'Creating...' : 'Create Post'}
                </button>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    {showAll ? 'Show Less' : `Show All (${posts?.length || 0})`}
                </button>
            </div>

            {isLoading && (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
                </div>
            )}

            {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 text-white text-center">
                    <p className="font-semibold">Error loading posts</p>
                </div>
            )}

            {!isLoading && posts && (
                <>
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                        <p className="text-white/80 text-sm text-center">
                            <strong>RTK Query Features:</strong> Automatic caching, refetching, and intelligent data management.
                            {isFetching && ' 🔄 Fetching...'}
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {displayedPosts?.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white flex-1">{post.title}</h3>
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm ml-2">
                                        #{post.id}
                                    </span>
                                </div>
                                <p className="text-white/80">{post.body}</p>
                                <p className="text-white/60 text-sm mt-2">User ID: {post.userId}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
