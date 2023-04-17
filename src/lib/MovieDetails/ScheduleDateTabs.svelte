<script lang="ts">
	import { onMount } from 'svelte';

	export let activeTabValue: any;
	export let items: Promise<any>[];
	// export let items: {
	// 	success: boolean;
	// 	error: {
	// 		error_id: number;
	// 		message: {
	// 			id: string;
	// 			en: string;
	// 		};
	// 	};
	// 	results: {
	// 		has_next: boolean;
	// 		page: number;
	// 		schedules: {
	// 			show_date: number;
	// 			schedules: {
	// 				id: string;
	// 				name: string;
	// 				type: number;
	// 				presale_flag: number;
	// 				favorite: boolean;
	// 				merchant: {
	// 					merchant_id: string;
	// 					merchant_name: string;
	// 				};
	// 				address: string;
	// 				location: {
	// 					latitude: string;
	// 					longitude: string;
	// 				};
	// 				show_time: {
	// 					category: string;
	// 					low_price: number;
	// 					high_price: number;
	// 					price_string: string;
	// 					show_time: {
	// 						id: string;
	// 						time: number;
	// 						seat: string;
	// 						studio: string;
	// 						expired: number;
	// 						status: number;
	// 						studio_type: string;
	// 					}[];
	// 				}[];
	// 			}[];
	// 		}[];
	// 	};
	// }[];

	let loaded_items: any = [];

	function load_item(item: any) {
		if (item.success) {
			console.log(item);
			if (!loaded_items.includes(item.results.schedules[0].show_date)) {
				loaded_items.push(item.results.schedules[0].show_date);
			}
		}
	}

	// Set default tab value
	onMount(() => {
		async function waitForPrommise(item: any) {
			return await Promise.resolve(item);
		}
		if (Array.isArray(items) && items.length > 0) {
			waitForPrommise(items[0]).then((item) => (activeTabValue = item));
		}
	});

	const today = Date.now();

	function converter(epoch: number) {
		const maybe_today = new Date(epoch);
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

		let day = maybe_today.getDate();
		let day_name = days[maybe_today.getDay()];
		let month = maybe_today.getMonth() + 1;
		let month_name = months[maybe_today.getMonth()];
		let year = maybe_today.getFullYear();

		return {
			day,
			day_name,
			month,
			month_name,
			year
		};
	}

	const converted_today = converter(today);

	const handleClick = (tabValue: any) => () => (activeTabValue = tabValue);
</script>

<ul class="absolute flex items-center gap-3">
	{#if Array.isArray(items)}
		{#each items as item}
			{#await item}
				<li>
					<button
						class="flex h-[72px] w-24 animate-pulse flex-col rounded-md bg-gray-700 text-center text-gray-400"
					>
						<span class="text-xs">Loading...</span>
						<span class="font-bold uppercase">Loading</span>
					</button>
				</li>
			{:then item}
				{#if item.success}
					{#if converter(item.results.schedules[0].show_date * 1000).day === converted_today.day && converter(item.results.schedules[0].show_date * 1000).month === converted_today.month && converter(item.results.schedules[0].show_date * 1000).year === converted_today.year}
						<li>
							<button
								class={activeTabValue == item
									? 'flex h-[72px] w-32 flex-col rounded-md bg-tix p-4 text-center text-white'
									: 'flex h-[72px] w-32 flex-col rounded-md p-4 text-center text-tix outline outline-1 -outline-offset-1 outline-tix'}
								on:click={handleClick(item)}
							>
								<span class="text-xs"
									>{converter(item.results.schedules[0].show_date * 1000).day}
									{converter(item.results.schedules[0].show_date * 1000).month_name}</span
								>
								<span class="font-bold uppercase">Hari Ini</span>
							</button>
						</li>
					{:else}
						<li>
							<button
								class={activeTabValue == item
									? 'flex h-[72px] w-24 flex-col rounded-md bg-tix p-4 text-center text-white'
									: 'flex h-[72px] w-24 flex-col rounded-md p-4 text-center text-tix outline outline-1 -outline-offset-1 outline-tix'}
								on:click={handleClick(item)}
							>
								<span class="text-xs"
									>{converter(item.results.schedules[0].show_date * 1000).day}
									{converter(item.results.schedules[0].show_date * 1000).month_name}</span
								>
								<span class="font-bold uppercase"
									>{converter(item.results.schedules[0].show_date * 1000).day_name}</span
								>
							</button>
						</li>
					{/if}
				{/if}
			{/await}
		{/each}
	{/if}
</ul>
