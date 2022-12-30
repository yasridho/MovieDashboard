/** @type {import('./$types').RequestHandler} */
export async function POST({ fetch }) {
	const url = 'https://api.tix.id/v1/token';
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
			'Client-Secret': '123456'
		}
	});
	return new Response(JSON.stringify(await res.json()), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
