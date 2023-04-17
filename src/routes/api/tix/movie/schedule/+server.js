/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, url, locals }) {
	const city = String(url.searchParams.get('city') ?? '');
	const date = String(url.searchParams.get('date') ?? '');
	const lat = String(url.searchParams.get('lat') ?? '');
	const lon = String(url.searchParams.get('lon') ?? '');
	const merchant = String(url.searchParams.get('merchant') ?? '');
	const movie = String(url.searchParams.get('movie') ?? '');
	const page = String(url.searchParams.get('page') ?? '');
	const q = String(url.searchParams.get('q') ?? '');
	const studio_type = String(url.searchParams.get('studio_type') ?? '');
	const _url = `https://api.tix.id/v3/schedule?city=${city}&date=${date}&lat=${lat}&lon=${lon}&merchant=${merchant}&movie=${movie}&page=${page}&q=${q}&sort=alfabetical&studio_type=${studio_type}`;

	if (locals.token === null) {
		return new Response('NO', { status: 401 });
	}

	const header = { Authorization: locals.token };
	const res = await fetch(_url, { headers: header });
	const status = res.status;
	const movies = await res.json();

	return new Response(JSON.stringify(movies), {
		status: status,
		headers: { 'Content-Type': 'application/json' }
	});
}
