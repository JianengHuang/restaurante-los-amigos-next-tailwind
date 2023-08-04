export default async function getDishes() {
	const response = await fetch(
		`http://${process.env.HOST}:${process.env.PORT}/api/dish`,
	);
	return new Response(response.body);
}
