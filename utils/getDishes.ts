import { Dish } from 'types/Dish';

export default async function getDishes(): Promise<Dish[]> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dish`, {
		next: {
			tags: ['dish'],
		},
	});
	console.log('response', response);
	const dishes = await response.json();
	return dishes.dishes;
}

export async function getDishesClient(): Promise<Dish[]> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dish`, {
		next: {
			tags: ['dish'],
		},
	});
	const dishes = await response.json();
	return dishes.dishes;
}
