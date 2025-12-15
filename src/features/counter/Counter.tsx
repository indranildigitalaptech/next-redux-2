import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import StoreProvider from '@/lib/StoreProvider';

export default function Counter({ initialCount, initialHeading, initialParagraph }: { initialCount?: number, initialHeading?: string, initialParagraph?: string }) {
    console.log("Counter rerender");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
                <Header heading={initialHeading} paragraph={initialParagraph} />

                <StoreProvider initialState={initialCount !== undefined ? {
                    counter: {
                        value: initialCount,
                        heading: initialHeading || '',
                        paragraph: initialParagraph || '',
                        modifiedAt: ''
                    }
                } : undefined}>
                    <Body />
                </StoreProvider>

                <Footer />
            </div>
        </div>
    );
}
