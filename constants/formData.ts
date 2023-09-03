export type FormDataType = {
	name: string;
	type: string;
	key:
		| 'dishId'
		| 'name'
		| 'ingredients'
		| 'description'
		| 'price'
		| 'allergens'
		| 'mightContain';
	placeholder?: string;
};

export const formData: FormDataType[] = [
	{
		name: 'ID',
		type: 'number',
		key: 'dishId',
		placeholder: '26',
	},
	{
		name: 'Name',
		type: 'text',
		key: 'name',
		placeholder: 'Arroz tres delicias',
	},
	{
		name: 'Ingredients',
		type: 'text',
		key: 'ingredients',
		placeholder: 'Arroz, gambas, guisantes, zanahoria, huevo',
	},
	{
		name: 'Description',
		type: 'text',
		key: 'description',
		placeholder: 'Arroz con gambas, guisantes, zanahoria y huevo',
	},
	{
		name: 'Price',
		type: 'number',
		key: 'price',
		placeholder: '5.50',
	},
	{
		name: 'Allergens',
		type: 'text',
		key: 'allergens',
		placeholder: '1, 3, 4, 5',
	},
	{
		name: 'Puede contener: ',
		type: 'text',
		key: 'mightContain',
		placeholder: '4, 5, 7',
	},
];
