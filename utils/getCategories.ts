import { Category } from 'types/Category';

export default async function getCategories(): Promise<Category[]> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
		next: {
			tags: ['category'],
		},
	});
	const categories = await response.json();
	return categories.categories;
}

export async function getCategoriesClient(): Promise<Category[]> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
		next: {
			tags: ['category'],
		},
	});
	const categories = await response.json();
	return categories.categories;
}
