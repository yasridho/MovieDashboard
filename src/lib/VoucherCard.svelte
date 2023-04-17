<script lang="ts">
	export let voucher: {
		id: string;
		title: string;
		normal_price: string;
		discounted_price: string;
		valid_period: number;
		quota: number;
		status: number;
		banner: string;
		voucher_type: string;
	};
</script>

<!-- Make a card here -->
<li class="w-80 shrink-0 snap-center md:w-1/3">
	<div class="relative overflow-hidden rounded-2xl shadow-lg">
		<img class="w-full rounded-t-lg" src={voucher.banner} alt={voucher.title} />
		<span
			class="absolute top-1 left-2 z-10 mt-3 mr-3 inline-flex rounded-full border-white bg-black/60 px-2 py-1 outline outline-1 outline-white"
		>
			<p class="text-xs font-semibold text-gray-50">
				{(voucher.voucher_type = 'streaming' ? 'Online' : voucher.voucher_type)}
			</p>
		</span>

		<div class="px-6 py-4">
			<div class="font-large mb-2 font-bold">{voucher.title}</div>
			<div class="flex h-8 justify-between">
				<span class="text-base text-gray-700">
					Periode tukar {voucher.valid_period} hari
				</span>
				<div class="flex flex-col">
					{#if voucher.discounted_price !== ''}
						<span class="text-right text-sm font-bold text-gray-300 line-through">
							{voucher.normal_price}
						</span>
						<span class="text-right text-base font-bold text-red-500"
							>{voucher.discounted_price}</span
						>
					{:else}
						<span class="text-right text-base font-bold">{voucher.normal_price}</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
</li>
