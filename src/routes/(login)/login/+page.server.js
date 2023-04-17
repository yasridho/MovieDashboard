let users = [
	{
		email: 'ayaya@ayaya.com',
		password: 'ayaya123'
	}
];

export const load = () => {
	return {
		users
	};
};

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const user = {
			email,
			password
		};
		users.push(user);
		console.log(user);
	}
};
