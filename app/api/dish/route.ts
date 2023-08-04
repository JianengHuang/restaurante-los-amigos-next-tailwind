import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
	const dishes = await prisma.dish.findMany();
	return NextResponse.json(dishes);
}

export async function POST(request: Request) {
	const body = await request.json();
	const dish = await prisma.dish.create({ data: body });
	return new Response(JSON.stringify(dish), { status: 200 });
}
