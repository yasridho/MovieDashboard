/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, request, url }) {
	const promo_url = 'https://api.tix.id/v1/content/promo/banner';
	const authHeader = request.headers.get('Authorization');

	if (authHeader === null) {
		return new Response('NO', { status: 401 });
	}

	const header = { Authorization: authHeader };
	const res = await fetch(promo_url, { headers: header });
	const vouchers = await res.json();

	return new Response(JSON.stringify(vouchers), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
