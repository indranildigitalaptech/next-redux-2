import { NextRequest, NextResponse } from "next/server";

let count = 10;
const heading = "Redux Counter";
const paragraph = "An example of a simple counter application using Redux Toolkit.";
let modifiedAt = "";


export async function GET() {
    return NextResponse.json({
        heading,
        paragraph,
        count,
        modifiedAt
    });
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (body.newCount !== undefined) {
        count = body.newCount;
        modifiedAt = new Date().toISOString();
    }

    return NextResponse.json({ heading, paragraph, count, modifiedAt });
}

export async function PUT(request: NextRequest) {
    const { newCount } = await request.json();
    count = newCount;
    return NextResponse.json({ heading, paragraph, count });
}
