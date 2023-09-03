import { Dispatch, SetStateAction, useEffect } from 'react';
import { Dish } from 'types/Dish';
import { getDishesClient } from 'utils/getDishes';

export default function useSetDishes(
	setCategories: Dispatch<SetStateAction<Dish[]>>,
) {
	useEffect(() => {
		(async () => {
			const dish = await getDishesClient();
			await setCategories(dish);
		})();
	}, []);
}
