import { FilteredCategory } from 'types/Category';
import { DishToSend } from 'types/Dish';
import { revalidateTagFunction } from './revalidateTagFunction';

export const saveCategoriesOnDB = async (categories: FilteredCategory[]) => {
	const response1 = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/category/all`,
		{
			method: 'DELETE',
		},
	);

	const response2 = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/category/all`,
		{
			method: 'POST',
			body: JSON.stringify({ categories }),
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	revalidateTagFunction('category');

	return response1.status === 200 && response2.status === 200;
};

export const updateDishOnDB = async (dish: DishToSend) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/dish/${dish.dishId}}`,
		{
			method: 'POST',
			body: JSON.stringify({ dish }),
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	revalidateTagFunction('dish');

	return response.status === 200;
};

export const saveDishOnDB = async (dish: DishToSend) => {
	console.log(JSON.stringify(dish));
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dish`, {
		method: 'POST',
		body: JSON.stringify(dish),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	revalidateTagFunction('dish');

	return response.status === 200;
};
