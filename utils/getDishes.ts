import db from 'db';

export default async function getDishes() {
	const dishes = await db.dish.findMany();
	return dishes;
}
