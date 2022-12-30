import { browser } from '$app/environment';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	async function get_token() {
		const token_url = '/api/tix/token';
		const token_res = await fetch(token_url, {
			method: 'POST'
		});
		const cur_token = await token_res.json();
		return cur_token.results.token;
	}

	async function get_header() {
		let header;
		let token;
		if (browser) {
			if (localStorage.getItem('token') === null) {
				token = await get_token();
				localStorage.setItem('token', token);
			}
			header = {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			};
		} else {
			token = await get_token();
			header = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
		}
		return header;
	}
	const url = '/api/tix/movies/now_playing';
	const voucher_url = '/api/tix/vouchers';
	const promo_url = '/api/tix/promos';
	const header = await get_header();

	const res = fetch(url, header);
	const voucher_res = fetch(voucher_url, header);
	const promo_res = fetch(promo_url, header);

	return {
		header: header,
		movies: await res.then((r) => r.json()),
		vouchers: await voucher_res.then((r) => r.json()),
		promos: await promo_res.then((r) => r.json())
	};
}
