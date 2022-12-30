<script lang="ts">
	import { onMount } from 'svelte';
	export let promos: {
		results: {
			id: string;
			name: string;
			promo_start: number;
			promo_end: number;
			uri: string;
			image_file: string;
			promo_tag: string;
			created_at: number;
			updated_at: number;
		}[];
	};

	onMount(() => {
		const scrollContainer = document.querySelector('#promo-list');
		if (scrollContainer) {
			scrollContainer.addEventListener('wheel', (evt) => {
				evt.preventDefault();
				const event = evt as WheelEvent;
				scrollContainer.scrollTo({
					left: scrollContainer.scrollLeft + event.deltaY * 5,
					behavior: 'smooth'
				});
			});
		}
	});
</script>

<div class="flex justify-center">
	<ul id="promo-list" class="carousel-container gap-3">
		{#each promos.results as promo}
			<li class="shrink-0 snap-center w-fit md:w-1/2">
				<a href={promo.uri}>
					<img src={promo.image_file} alt={promo.name} />
				</a>
			</li>
		{/each}
	</ul>
</div>
