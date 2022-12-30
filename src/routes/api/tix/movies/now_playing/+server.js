/** @type {import('../$types').RequestHandler} */
export async function GET({ fetch, request, url }) {
	// Parameters
	const city_id = String(url.searchParams.get('city_id') ?? '');

	const now_playing_url = `https://api.tix.id/v1//movies/now_playing?city_id=${city_id}`;
	const authHeader = request.headers.get('Authorization');

	if (authHeader === null) {
		return new Response('NO', { status: 401 });
	}

	const header = { Authorization: authHeader };
	const res = await fetch(now_playing_url, { headers: header });
	const movies = await res.json();

	return new Response(JSON.stringify(movies), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
