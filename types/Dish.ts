export type Dish = {
	_id: string;
	dishId: number;
	name: string;
	description: string;
	ingredients: string[];
	price: number;
	image: string;
	category: string;
	allergens: number[];
	mightCointain: number[];
	isRecommended: boolean;
	createdAt: Date;
	updatedAt: Date;
};
