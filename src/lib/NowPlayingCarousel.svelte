<script lang="ts">
	import { onMount } from 'svelte';
	import MovieCard from './MovieCard.svelte';
	export let movie_data: {
		results: {
			id: string;
			title: string;
			movie_id: string;
			synopsis: string;
			production_company: string;
			actor: string;
			genre_ids: {
				id: string;
				name: string;
				updated_at: string;
			}[];
			duration: number;
			poster_path: string;
			age_category: string;
			trailer_path: string;
			trailer_thumbnail_path: string;
			producer: string;
			director: string;
			presale_flag: number;
			is_custom_event: boolean;
			rating: number;
			score_home_display: boolean;
			merchant: {
				merchant_id: string;
				merchant_name: string;
			}[];
		}[];
	};

	let theatre = 'all';
	let totalMovie = {
		XXI: {
			presale: 0,
			onsale: 0
		},
		CGV: {
			presale: 0,
			onsale: 0
		},
		Cinepolis: {
			presale: 0,
			onsale: 0
		}
	};

	// Get Total Movie
	movie_data.results.forEach((movie) => {
		if (
			movie.merchant.find(
				(merchant) => merchant.merchant_id === '2224f7e3-da00-4fb9-9de3-2b888d83ac02'
			)
		) {
			if (movie.presale_flag === 1) totalMovie.XXI.presale++;
			else totalMovie.XXI.onsale++;
		}
		if (
			movie.merchant.find(
				(merchant) => merchant.merchant_id === '2224f7e3-da00-4fb9-9de3-2b888d83ac03'
			)
		) {
			if (movie.presale_flag === 1) totalMovie.CGV.presale++;
			else totalMovie.CGV.onsale++;
		}
		if (
			movie.merchant.find(
				(merchant) => merchant.merchant_id === '37cee700-7e19-4353-b806-dbb1dcdcfbd2'
			)
		) {
			if (movie.presale_flag === 1) totalMovie.Cinepolis.presale++;
			else totalMovie.Cinepolis.onsale++;
		}
	});

	onMount(() => {
		const theatreTabs = document.querySelector('#theatre-tabs');
		const scrollContainer = document.querySelector('#movie-list');

		if (theatreTabs) {
			const tabTogglers = theatreTabs.querySelectorAll('#theatre-tabs p');

			function makeBtnDisabled(btn: HTMLButtonElement) {
				btn.classList.add('cursor-not-allowed');
				btn.disabled = true;
				if (btn.firstChild) {
					const child = btn.firstChild as HTMLElement;
					child.classList.remove('text-gray-800');
					child.classList.add('text-gray-300');
				}
			}

			tabTogglers.forEach((toggler) => {
				const btn = toggler.parentElement as HTMLButtonElement;
				if (totalMovie.XXI.onsale === 0 && toggler.classList.contains('text-theatre-xxi')) {
					makeBtnDisabled(btn);
				}
				if (totalMovie.CGV.onsale === 0 && toggler.classList.contains('text-theatre-cgv')) {
					makeBtnDisabled(btn);
				}
				if (
					totalMovie.Cinepolis.onsale === 0 &&
					toggler.classList.contains('text-theatre-cinepolis')
				) {
					makeBtnDisabled(btn);
				}
				toggler.addEventListener('click', (e) => {
					function changeAllButtonToGray() {
						for (let i = 0; i < tabTogglers.length; i++) {
							let tabParent = tabTogglers[i].parentElement as HTMLButtonElement;
							// All Button
							if (tabTogglers[i].classList.contains('text-theatre-all')) {
								tabParent.classList.remove('outline-blue-600');
								tabParent.classList.add('outline-gray-300');
								tabTogglers[i].classList.remove('text-blue-600');
								tabTogglers[i].classList.add('text-gray-800');
							}
							// XXI Button
							if (tabTogglers[i].classList.contains('text-theatre-xxi')) {
								tabParent.classList.remove('bg-gradient-to-r', 'from-[#c7a24b]', 'to-[#93682b]');
								tabParent.classList.add('outline', 'outline-1', 'outline-gray-300');
								tabTogglers[i].classList.remove('text-gray-200');
								tabTogglers[i].classList.add('text-gray-800');
							}
							// CGV Button
							if (tabTogglers[i].classList.contains('text-theatre-cgv')) {
								tabParent.classList.remove('bg-[#ee2e25]');
								tabParent.classList.add('outline', 'outline-1', 'outline-gray-300');
								tabTogglers[i].classList.remove('text-gray-200');
								tabTogglers[i].classList.add('text-gray-800');
							}
							// Cinepolis Button
							if (tabTogglers[i].classList.contains('text-theatre-cinepolis')) {
								tabParent.classList.remove('bg-[#032165]');
								tabParent.classList.add('outline', 'outline-1', 'outline-gray-300');
								tabTogglers[i].classList.remove('text-gray-200');
								tabTogglers[i].classList.add('text-gray-800');
							}
						}
					}
					if (e.target) {
						const currentTab = e.target as HTMLElement;
						const parentElement = currentTab.parentElement as HTMLButtonElement;
						if (!parentElement.disabled) {
							changeAllButtonToGray();
							// All Button
							if (currentTab.classList.contains('text-theatre-all')) {
								theatre = 'all';
								parentElement.classList.remove('outline-gray-300');
								parentElement.classList.add('outline-blue-600');
								currentTab.classList.remove('text-gray-800');
								currentTab.classList.add('text-blue-600');
							}
							// XXI Button
							if (currentTab.classList.contains('text-theatre-xxi')) {
								theatre = 'XXI';
								parentElement.classList.remove('outline', 'outline-1', 'outline-gray-300');
								parentElement.classList.add('bg-gradient-to-r', 'from-[#c7a24b]', 'to-[#93682b]');
								currentTab.classList.remove('text-gray-800');
								currentTab.classList.add('text-gray-200');
							}
							// CGV Button
							if (currentTab.classList.contains('text-theatre-cgv')) {
								theatre = 'CGV';
								parentElement.classList.remove('outline', 'outline-1', 'outline-gray-300');
								parentElement.classList.add('bg-[#ee2e25]');
								currentTab.classList.remove('text-gray-800');
								currentTab.classList.add('text-gray-200');
							}
							// Cinepolis Button
							if (currentTab.classList.contains('text-theatre-cinepolis')) {
								theatre = 'Cinépolis';
								parentElement.classList.remove('outline', 'outline-1', 'outline-gray-300');
								parentElement.classList.add('bg-[#032165]');
								currentTab.classList.remove('text-gray-800');
								currentTab.classList.add('text-gray-200');
							}
						}
					}
				});
			});
		}

		if (scrollContainer) {
			scrollContainer.addEventListener('wheel', (evt) => {
				evt.preventDefault();
				const event = evt as WheelEvent;
				scrollContainer.scrollTo({
					left: scrollContainer.scrollLeft + event.deltaY * 2,
					behavior: 'smooth'
				});
			});
		}
	});
</script>

<!-- Tabs -->
<div id="theatre-tabs" class="ml-10 flex justify-start gap-2">
	<button class="all-theatre mt-2 rounded-3xl outline outline-1 outline-blue-600">
		<p class="text-theatre-all py-1 px-3 text-center text-sm font-bold text-blue-600">
			Semua Bioskop
		</p>
	</button>
	<button class="theatre-xxi mt-2 rounded-3xl outline outline-1 outline-gray-300">
		<p class="text-theatre-xxi py-1 px-3 text-center text-sm font-bold text-gray-800">XXI</p>
	</button>
	<button class="theatre-cgv mt-2 rounded-3xl outline outline-1 outline-gray-300">
		<p class="text-theatre-cgv py-1 px-3 text-center text-sm font-bold text-gray-800">CGV</p>
	</button>
	<button class="theatre-cinepolis mt-2 rounded-3xl outline outline-1 outline-gray-300">
		<p class="text-theatre-cinepolis py-1 px-3 text-center text-sm font-bold text-gray-800">
			Cinépolis
		</p>
	</button>
</div>

<!-- Tab Contents -->
<div class="flex justify-center">
	<ul id="movie-list" class="carousel-container mx-5 mt-3 mb-6 gap-3 p-4 md:mx-28">
		{#each movie_data.results as movie}
			{#if movie.presale_flag != 1}
				{#if theatre == 'all'}
					<MovieCard {movie} />
				{:else if theatre == 'XXI'}
					{#if movie.merchant.find((/** @type {{ merchant_id: string; }} */ merchant) => merchant.merchant_id == '2224f7e3-da00-4fb9-9de3-2b888d83ac02')}
						<MovieCard {movie} />
					{/if}
				{:else if theatre == 'CGV'}
					{#if movie.merchant.find((/** @type {{ merchant_id: string; }} */ merchant) => merchant.merchant_id == '2224f7e3-da00-4fb9-9de3-2b888d83ac03')}
						<MovieCard {movie} />
					{/if}
				{:else if theatre == 'Cinépolis'}
					{#if movie.merchant.find((/** @type {{ merchant_id: string; }} */ merchant) => merchant.merchant_id == '37cee700-7e19-4353-b806-dbb1dcdcfbd2')}
						<MovieCard {movie} />
					{/if}
				{/if}
			{/if}
		{/each}
	</ul>
</div>
