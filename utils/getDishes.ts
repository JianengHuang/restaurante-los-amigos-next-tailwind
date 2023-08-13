export default async function getDishes() {
	const response = await fetch('http://localhost:4000/dish', {
		cache: 'no-cache',
	});
	const dishes = await response.json();
	return dishes.dishes;
}
