export default async function getDishes() {
	const response = await fetch(`/api/dish`);
	return new Response(response.body);
}
