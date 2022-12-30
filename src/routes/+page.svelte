<script lang="ts">
	import NowPlayingCarousel from '$lib/NowPlayingCarousel.svelte';
	import PromoCarousel from '$lib/PromoCarousel.svelte';
	import VoucherCarousel from '$lib/VoucherCarousel.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any;
	const movies = data.movies;
	const vouchers = data.vouchers;
	const promos = data.promos;
</script>

	<div class=" bg-gray-100">
		<!-- Get Location Button -->
		<button class="fixed bottom-0 right-0 m-4 p-5 z-20 bg-tix text-white rounded-full shadow-lg">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
				/>
			</svg>
		</button>
		<div class="divide-y divide-solid">
			<PromoCarousel {promos} />
			<div>
				<div class="flex justify-between mt-10">
					<h3 class="font-bold text-2xl text-gray-800 ml-10">Sedang Tayang</h3>
					<button class="flex justify-center mr-10">
						<p class="text-xl">Semua</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="white"
							class="w-7 h-7 m-1 p-1 ml-2 bg-tix rounded-full"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
				<NowPlayingCarousel movie_data={movies} />
			</div>
			<div>
				<div class="ml-10 mt-6">
					<h3 class="font-bold text-2xl text-gray-800 ">Voucher Deal!</h3>
					<h5 class="text-gray-600">Lebih hemat untuk hiburan nontonmu</h5>
				</div>
				<VoucherCarousel {vouchers} />
			</div>
		</div>
	</div>
