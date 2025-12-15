import { NextRequest, NextResponse } from "next/server";

let count = 0;
const heading = "Hello world!";
const paragraph = "This is a simple API route in Next.js.";

export async function GET() {
    return NextResponse.json({
        heading,
        paragraph,
        count
    });
}

export async function POST(request: NextRequest) {
    const { newCount } = await request.json();
    count = newCount;
    return NextResponse.json({ heading, paragraph, count });
}

export async function PUT(request: NextRequest) {
    const { newCount } = await request.json();
    count = newCount;
    return NextResponse.json({ heading, paragraph, count });
}
