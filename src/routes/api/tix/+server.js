/** @type {import('../$types').RequestHandler} */
export function GET() {
	return new Response(JSON.stringify({ message: 'Hello world' }), { status: 200 });
}
