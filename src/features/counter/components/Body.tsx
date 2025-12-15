'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { increment, decrement, reset, updateCountAsync } from '../counterSlice';

const Body = () => {
    console.log("Body rerender");
    const count = useAppSelector((state) => state.counter.value);

    const dispatch = useAppDispatch();
    return (
        <>
            <div className="bg-white/20 rounded-2xl p-8 mb-8 backdrop-blur-sm text-center">
                <p className="text-7xl font-bold text-white tabular-nums">
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

                <button
                    onClick={() => dispatch(updateCountAsync(count))}
                    className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 w-full md:w-auto"
                >
                    Sync Count
                </button>
            </div>
        </>
    )
}

export default Body