<script lang="ts">
	import Merchant from './Merchant.svelte';

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

<li class="group w-40 shrink-0 cursor-pointer snap-center md:w-60">
	<a href={'/' + movie.id}>
		<div class="relative block pb-10 md:pb-28 ">
			<img
				src={movie.poster_path}
				title={movie.title}
				alt={movie.title}
				class="absolute inset-0 rounded-xl object-contain shadow-xl transition-all group-hover:brightness-50 group-hover:grayscale"
			/>
			<div class="relative inline overflow-hidden p-2">
				<div class="mt-20 md:mt-32">
					<div
						class="h-20 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
					>
						<p class="text-center font-bold text-white md:text-base">{movie.title}</p>
						<div class="gap-2">
							{#each movie.genre_ids as genre}
								<p class="text-center text-xs font-semibold text-white md:text-sm">
									{genre.name}
								</p>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="text-md text-center font-bold text-gray-800 md:text-lg">
			{movie.title.toUpperCase()}
		</p>
		<div class="mt-2 flex justify-center gap-1">
			{#each movie.merchant as merchant}
				<Merchant {merchant} />
			{/each}
		</div>
	</a>
</li>
