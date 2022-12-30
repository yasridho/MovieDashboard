<script lang="ts">
	export let primary_links: { href: string; text: string }[];
	export let secondary_links: { href: string; text: string; primary: boolean }[];
</script>

<nav class="bg-tix text-gray-200">
	<div class="xl:max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<!-- Primary Nav -->
			<div class="flex space-x-4 z-50">
				<!-- Logo -->
				<a class="flex items-center py-5 px-2 text-gray-200" href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 mr-2 ml-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
						/>
					</svg>
					<span class="text-large font-bold">Movie Dashboard</span>
				</a>
				<div class="hidden md:flex items-center space-x-1">
					{#each primary_links as link}
						<a class="px-3 py-2" href={link.href}>{link.text}</a>
					{/each}
				</div>
			</div>
			<!-- Secondary Nav -->
			<div class="hidden md:flex items-center space-x-2 mr-8">
				{#each secondary_links as link}
					{#if link.primary}
						<a
							href={link.href}
							class="px-3 py-2 bg-green-500 text-green-900 font-bold rounded-md hover:bg-green-400 hover:text-green-900"
							>{link.text}</a
						>
					{:else}
						<a class="px-3 py-2" href={link.href}>{link.text}</a>
					{/if}
				{/each}
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center mr-5">
				<button class="outline-none mobile-menu-button group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.6"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!-- Mobile menu goes here -->
					<div
						class="mobile-menu md:hidden absolute z-40 -top-full opacity-0 left-0 pl-5 pb-3 w-screen bg-tix group-focus:top-16 group-focus:opacity-100 transition-all duration-500 ease-in-out"
					>
						{#each primary_links as link}
							<a class="block py-3 px-4 text-sm" href={link.href}>{link.text}</a>
						{/each}
						{#each secondary_links as link}
							<a class="block py-3 px-4 text-sm" href={link.href}>{link.text}</a>
						{/each}
					</div>
				</button>
			</div>
		</div>
	</div>
</nav>
