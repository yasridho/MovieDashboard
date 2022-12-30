/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, request, url }) {
	// Parameters
	const limit = Number(url.searchParams.get('limit') ?? '10');
	const page = Number(url.searchParams.get('page') ?? '1');

	const vouchers_url = `https://api-voucher.tix.id/v1/vouchers?limit=${limit}&page=${page}`;
	const authHeader = request.headers.get('Authorization');

	if (authHeader === null) {
		return new Response('NO', { status: 401 });
	}

	const header = { Authorization: authHeader };
	const res = await fetch(vouchers_url, { headers: header });
	const vouchers = await res.json();

	return new Response(JSON.stringify(vouchers), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
