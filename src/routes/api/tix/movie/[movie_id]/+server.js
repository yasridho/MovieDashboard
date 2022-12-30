/** @type {import('../../$types').RequestHandler} */
export async function GET({ fetch, request, params }) {
	// @ts-ignore
	const now_playing_url = `https://curated.tix.id/v1/app/movie/${params.movie_id}`;
	const authHeader = request.headers.get('Authorization');

	if (authHeader === null) {
		return new Response('NO', { status: 401 });
	}

	const header = { Authorization: authHeader };
	const res = await fetch(now_playing_url, { headers: header });
	const status = res.status;
	const movies = await res.json();

	return new Response(JSON.stringify(movies), {
		status: status,
		headers: { 'Content-Type': 'application/json' }
	});
}
