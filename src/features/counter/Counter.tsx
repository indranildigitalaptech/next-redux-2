
import Header from './Header';
import Body from './Body';
import StoreProvider from '@/lib/StoreProvider';

export default function Counter() {
    console.log("Counter rerender");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
                <Header />

                <StoreProvider>
                    <Body />
                </StoreProvider>

                <div className="mt-6 text-center">
                    <p className="text-white/80 text-sm">
                        Powered by Redux Toolkit
                    </p>
                </div>
            </div>
        </div>
    );
}
