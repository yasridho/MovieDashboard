import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.headers.get('Authorization')) {
		event.locals.token = event.request.headers.get('Authorization');
	} else {
		if (event.url.pathname.startsWith('/api') && !event.url.pathname.startsWith('/api/tix/token')) {
			return new Response('{"error":"NO"}', {
				status: 401,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	}

	const response = await resolve(event);

	return response;
};
