<script lang="ts">
	import Merchant from "./Merchant.svelte";

	export let movie: {
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
	};
</script>

<li class="shrink-0 snap-center w-40 md:w-60 cursor-pointer group">
	<a href={'/' + movie.id}>
		<div class="relative block pb-10 md:pb-28 ">
			<img
				src={movie.poster_path}
				title={movie.title}
				alt={movie.title}
				class="absolute inset-0 object-contain group-hover:grayscale group-hover:brightness-50 rounded-xl transition-all shadow-xl"
			/>
			<div class="relative inline p-2 overflow-hidden">
				<div class="mt-20 md:mt-32">
					<div
						class="h-20 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
					>
						<p class="font-bold text-center text-white md:text-base">{movie.title}</p>
						<div class="gap-2">
							{#each movie.genre_ids as genre}
								<p class="text-xs md:text-sm text-center font-semibold text-white">
									{genre.name}
								</p>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="text-md md:text-lg text-gray-800 font-bold text-center">
			{movie.title.toUpperCase()}
		</p>
		<div class="flex justify-center gap-1 mt-2">
			{#each movie.merchant as merchant}
				<Merchant merchant={merchant} />
			{/each}
		</div>
	</a>
</li>
