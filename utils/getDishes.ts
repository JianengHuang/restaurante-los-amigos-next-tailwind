import { PrismaClient } from '@prisma/client';

export default async function getDishes() {
	const prisma = new PrismaClient();
	const dishes = await prisma.dish.findMany();
	return dishes;
}
