import { UnFilteredDish } from '@components/DishContainerForm';
import { DishToSend } from 'types/Dish';

const filterStringToStringArray = (string: string) => {
	return string.split(',').map((item) => item.trim());
};

const filterStringToNumberArray = (string: string) => {
	return string.split(',').map((item) => parseInt(item.trim()));
};

const filterDish = (dish: UnFilteredDish) => {
	const newDish: DishToSend = {
		dishId: Number(dish.dishId),
		name: dish.name,
		description: dish.description,
		ingredients: filterStringToStringArray(dish.ingredients),
		price: Number(dish.price),
		image: `/images/${dish.dishId}.jpg`,
		category: dish.category,
		allergens: filterStringToNumberArray(dish.allergens),
		mightContain: filterStringToNumberArray(dish.mightContain),
		isRecommended: false,
		priority: 0,
	};
	return newDish;
};

export default filterDish;
