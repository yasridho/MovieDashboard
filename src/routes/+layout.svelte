<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	const pr_links = [
		{
			text: 'Now Playing',
			href: '/now_playing'
		},
		{
			text: 'About',
			href: '/about'
		}
	];
	const sec_links = [
		{
			text: 'Login',
			href: '/login',
			primary: false
		},
		{
			text: 'Register',
			href: '/register',
			primary: true
		}
	];
</script>

<header>
	<Navbar primary_links={pr_links} secondary_links={sec_links} />
</header>
<body>
	<main class="h-full w-full">
		<slot />
	</main>
</body>
