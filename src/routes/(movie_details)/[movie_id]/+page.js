import { browser } from '$app/environment';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	if (browser) {
		const header = { Authorization: 'Bearer ' + localStorage.getItem('token') };

		const fetchMovie = async () => {
			const url = 'api/tix/movie/' + params.movie_id;
			const res = await fetch(url, { headers: header });
			return res.json();
		};

		const get_schedules = async (/** @type {string} */ date) => {
			const url = 'api/tix/movie/schedule?movie=' + params.movie_id + '&date=' + date;
			const res = await fetch(url, { headers: header });
			const data = await res.json();
			return data;
		};

		const schedules = async () => {
			let date = new Date();

			/**
			 * @param {{ toISOString: () => string; }} _date
			 */
			function dateToString(_date) {
				return _date.toISOString().split('T')[0];
			}
			let results = [];

			for (let i = 0; i <= 10; i++) {
				let data = get_schedules(dateToString(date));
				results.push(data);
				date.setDate(date.getDate() + 1);
			}
			return results;
		};

		return {
			param: params.movie_id,
			movie: fetchMovie(),
			schedule: schedules()
		};
	}
}
