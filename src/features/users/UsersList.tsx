'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchUsers, clearUsers } from './usersSlice';

export default function UsersList() {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchUsers());
    };

    const handleClear = () => {
        dispatch(clearUsers());
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-4 justify-center">
                <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
                >
                    {loading ? 'Loading...' : 'Refresh Users'}
                </button>
                <button
                    onClick={handleClear}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    Clear Users
                </button>
            </div>

            {loading && (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
                </div>
            )}

            {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 text-white text-center">
                    <p className="font-semibold">Error: {error}</p>
                </div>
            )}

            {!loading && !error && users.length === 0 && (
                <div className="bg-white/10 rounded-xl p-6 text-white text-center">
                    <p>{`No users loaded. Click "Refresh Users" to fetch data.`}</p>
                </div>
            )}

            {!loading && users.length > 0 && (
                <div className="grid gap-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{user.name}</h3>
                            <div className="space-y-1 text-white/80">
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> {user.website}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
