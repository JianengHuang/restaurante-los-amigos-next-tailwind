export type Dish = {
	id: string;
	dishId: number;
	name: string;
	description: string;
	ingredients: string[];
	price: number;
	image: string;
	category: string;
	allergens: number[];
	mightContain: number[];
	isRecommended: boolean;
	priority: number;
	createdAt: Date;
	updatedAt: Date;
};

export type DishToSend = {
	dishId: number;
	name: string;
	description: string;
	ingredients: string[];
	price: number;
	image: string;
	category: string;
	allergens: number[];
	mightContain: number[];
	priority: number;
	isRecommended: boolean;
};
