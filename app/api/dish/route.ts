import db from 'db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	const dishes = await db.dish.findMany();
	return NextResponse.json(dishes);
}
