'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { increment, decrement, reset } from './counterSlice';

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
                <h1 className="text-5xl font-bold text-white mb-8 text-center">Redux Counter</h1>

                <div className="bg-white/20 rounded-2xl p-8 mb-8 backdrop-blur-sm">
                    <p className="text-7xl font-bold text-white text-center tabular-nums">
                        {count}
                    </p>
                </div>

                <div className="flex gap-4 flex-wrap justify-center">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Decrement -
                    </button>

                    <button
                        onClick={() => dispatch(reset())}
                        className="px-8 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Reset
                    </button>

                    <button
                        onClick={() => dispatch(increment())}
                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Increment +
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-white/80 text-sm">
                        Powered by Redux Toolkit
                    </p>
                </div>
            </div>
        </div>
    );
}
