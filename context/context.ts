import { createContext, Dispatch, SetStateAction } from 'react';
import { Category } from 'types/Category';
import { Dish } from 'types/Dish';

type Data = {
	dishes: Dish[];
	categories: Category[];
};

export const DataContext = createContext<Data>({ dishes: [], categories: [] });

export const AddDishClickedContext = createContext<
	Dispatch<SetStateAction<boolean>>
>(() => {});
