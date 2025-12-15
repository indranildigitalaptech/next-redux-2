import Counter from '@/features/counter/Counter';

async function getData() {
    const res = await fetch('http://localhost:3000/api/data', { cache: 'no-store' });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function CounterPage() {
    const data = await getData();
    return <Counter initialCount={data.count} initialHeading={data.heading} initialParagraph={data.paragraph} />;
}
