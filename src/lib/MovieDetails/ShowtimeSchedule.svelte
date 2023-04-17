<script lang="ts">
	export let categories: {
		category: string;
		low_price: number;
		high_price: number;
		price_string: string;
		show_time: {
			id: string;
			time: number;
			seat: string;
			studio: string;
			expired: number;
			status: number;
			studio_type: string;
		}[];
	}[];

	function setTime(epoch: number, offset: number) {
		let d = new Date(epoch);
		const utc = d.getTime() + d.getTimezoneOffset() * 60000;
		d = new Date(utc + 3600000 * offset);
		return d;
	}

	const curTime = new Date();
</script>

{#each categories as cat}
	<div class="flex flex-col">
		<div class="flex justify-between">
			<span class="font-semibold text-gray-600">{cat.category}</span>
			<span class="text-gray-600">{cat.price_string}</span>
		</div>
		<div class="mt-2 flex gap-2 overflow-x-scroll">
			{#each cat.show_time as show}
				{#if curTime >= setTime(show.expired * 1000, +0)}
					<div class="flex h-8 flex-col items-center justify-center rounded-md bg-gray-200">
						<span class="text-md px-5 text-center font-semibold text-gray-400">
							{setTime(show.time * 1000, +0)
								.toTimeString()
								.slice(0, 5)}
						</span>
					</div>
				{:else}
					<div
						class="flex h-8 flex-col items-center justify-center rounded-md outline outline-1 -outline-offset-1 outline-gray-200"
					>
						<span class="text-md px-5 text-center font-semibold text-tix">
							{setTime(show.time * 1000, +0)
								.toTimeString()
								.slice(0, 5)}
						</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/each}
