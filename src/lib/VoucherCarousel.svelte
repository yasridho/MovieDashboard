<script lang="ts">
	import VoucherCard from './VoucherCard.svelte';
	import { onMount } from 'svelte';

	export let vouchers: {
		results: {
			id: string;
			title: string;
			normal_price: string;
			discounted_price: string;
			valid_period: number;
			quota: number;
			status: number;
			banner: string;
			voucher_type: string;
		}[];
	};

	onMount(() => {
		const scrollContainer = document.querySelector('#voucher-list');
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
	<ul id="voucher-list" class="carousel-container gap-3 mt-3 mx-5 md:mx-28 p-4">
		{#each vouchers.results as voucher}
			<VoucherCard {voucher} />
		{/each}
	</ul>
</div>
