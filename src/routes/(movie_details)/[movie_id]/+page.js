import { browser } from '$app/environment';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	if (browser) {
		const fetchMovie = async () => {
			const url = 'api/tix/movie/' + params.movie_id;
			const header = { Authorization: 'Bearer ' + localStorage.getItem('token') };
			const res = await fetch(url, { headers: header });
			return res.json();
		};
		return {
			param: params.movie_id,
			movie: fetchMovie()
		};
	}
}
