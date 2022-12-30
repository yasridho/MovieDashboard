<script lang="ts">
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const { movie, param } = data;

	let title: HTMLElement;
	let poster: HTMLElement;
	let backdrop: HTMLElement;
	let synopsis: HTMLElement;
	let trailer_link: HTMLAnchorElement;
	
	let genre: HTMLElement;
	let durasi: HTMLElement;
	let rating: HTMLElement;
	let sutradara: HTMLElement;

	onMount(() => {
		const duration = movie.results.duration;
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;
		const trailer_thumb = backdrop.parentElement as HTMLAnchorElement;
		
		genre.innerText = movie.results.genre;
		durasi.innerText = `${hours} jam ${minutes} menit`;
		rating.innerText = movie.results.rating;
		rating.classList.add('bg-gray-200', 'p-1', 'rounded-md', 'text-gray-600', 'font-bold')
		sutradara.innerText = movie.results.director;

		trailer_link.href = movie.results.trailer.path;
		trailer_thumb.href = movie.results.trailer.path;
		
		title.firstChild?.remove();
		title.classList.remove('animate-pulse');
		title.innerHTML = `<h4 class="font-bold text-lg md:text-2xl lg:text-4xl font-[arial] text-gray-800 md:text-white">${movie.results.name}</h4>`
		
		poster.firstChild?.remove();
		poster.classList.remove('animate-pulse');
		poster.innerHTML = `<img src="${movie.results.poster}" alt="${movie.results.name}" class="object-cover w-full bg-gray-300 rounded-xl dark:bg-gray-700">`;
		
		backdrop.classList.remove('animate-pulse');
		backdrop.style.backgroundImage = `url(${movie.results.trailer.thumbnail})`;
		backdrop.style.backgroundSize = 'cover';
		backdrop.style.backgroundPosition = 'center';
		backdrop.style.backgroundRepeat = 'no-repeat';
		
		synopsis.firstChild?.remove();
		synopsis.classList.remove('animate-pulse');
		synopsis.innerHTML = `<p class="text-gray-800 md:text-white font-semibold">${movie.results.information.id}</p>`;
	});
</script>
<div class="relative px-5 pt-28 md:px-28 md:py-16">
	<div class="flex justify-start gap-5 md:gap-20 container mt-20">
		<!-- Poster -->
		<div bind:this={poster} class="object-contain flex justify-center items-center shadow-xl h-40 z-20 md:h-[26rem] lg:h-[34rem] aspect-[12/16] bg-gray-300 rounded-xl animate-pulse">
			<svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
		</div>
		<div class="flex flex-col mt-10 md:mb-5 lg:mb-20 justify-end gap-2 md:gap-6 md:z-20">
			<!-- Title -->
			<div bind:this={title} class="animate-pulse">
				<div class="md:h-8 h-5 bg-gray-200 rounded-full w-48 mb-4 "></div>
			</div>
			<!-- Synopsis -->
			<div bind:this={synopsis} class="hidden md:block animate-pulse">
				<div class="space-y-3">
					<div class="grid grid-cols-3 gap-4">
					  	<div class="h-2 bg-gray-200 rounded col-span-2"></div>
					  	<div class="h-2 bg-gray-200 rounded col-span-1"></div>
					</div>
					<div class="h-2 bg-gray-200 rounded"></div>
				</div>
			</div>
			<div class="flex md:hidden flex-row gap-6">
				<div class="flex flex-col">
					<span class="text-sm text-gray-500">Genre</span>
					<span class="text-sm text-gray-500">Durasi</span>
					<span class="text-sm text-gray-500">Sutradara</span>
					<span class="text-sm text-gray-500">Rating Usia</span>
				</div>
				<div class="flex flex-col justify-evenly">
					<span class=" text-sm" bind:this={genre}>Loading genre...</span>
					<span class=" text-sm" bind:this={durasi}>Loading duration...</span>
					<span class=" text-sm" bind:this={sutradara}>Loading director...</span>
					<span class=" text-xs" bind:this={rating}>Loading rating...</span>
				</div>
			</div>
			<a class="hidden md:flex justify-start gap-3" href={'/'+param} target="_blank" rel="noreferrer" bind:this={trailer_link}>
				<div class="outline outline-1 rounded-full outline-white p-3">
					<svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#eaeaea"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#eaeaea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</div>
				<div class="flex flex-col justify-center">
					<p class="text-white">WATCH THE TRAILER</p>
				</div>
			</a>
		</div>
	</div>
	<!-- Banner -->
	<a class="absolute inset-0 z-10" href={'/'+param} rel="noreferrer">
		<div bind:this={backdrop} class="relative h-56 md:h-[40rem] bg-gray-800">
			<div class="absolute inset-0 bg-black opacity-60"></div>
			<div class="absolute inset-0 flex md:hidden justify-center">
				<div class="flex flex-col justify-center">
					<svg class="outline outline-2 rounded-full p-2" width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" color="#eaeaea"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#eaeaea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</div>
			</div>
		</div>
	</a>
</div>