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
<li class="shrink-0 snap-center w-80 md:w-1/3">
	<div class="relative rounded-2xl overflow-hidden shadow-lg">
		<img class="rounded-t-lg w-full" src={voucher.banner} alt={voucher.title} />
		<span
			class="absolute top-1 left-2 border-white inline-flex mt-3 mr-3 px-2 py-1 rounded-full z-10 outline outline-1 outline-white bg-black/60"
		>
			<p class="text-xs text-gray-50 font-semibold">
				{(voucher.voucher_type = 'streaming' ? 'Online' : voucher.voucher_type)}
			</p>
		</span>

		<div class="px-6 py-4">
			<div class="font-bold font-large mb-2">{voucher.title}</div>
			<div class="flex justify-between h-8">
				<p class="text-gray-700 text-base">
					Periode tukar {voucher.valid_period} hari
				</p>
				<div class="flex flex-col">
					{#if voucher.discounted_price !== ''}
						<p class="text-right font-bold text-sm text-gray-300 line-through">
							{voucher.normal_price}
						</p>
						<p class="text-right font-bold text-base text-red-500">{voucher.discounted_price}</p>
					{:else}
						<p class="text-right font-bold text-base">{voucher.normal_price}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
</li>
