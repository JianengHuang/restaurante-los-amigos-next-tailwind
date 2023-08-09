import db from 'db';
import { NextResponse } from 'next/server';

export const dynamic = true;

export async function GET() {
	const dishes = await db.dish.findMany();
	return NextResponse.json(dishes);
}
