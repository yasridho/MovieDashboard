<script lang="ts">
	export let merchant: {
		merchant_id: string;
		merchant_name: string;
	};
</script>

{#if merchant.merchant_name == 'XXI'}
	<p
		class="rounded-md bg-gradient-to-r from-[#c7a24b] to-[#93682b] px-2 py-1 text-xs font-extrabold text-gray-200"
	>
		{merchant.merchant_name}
	</p>
{:else if merchant.merchant_name == 'CGV'}
	<p class="rounded-md bg-[#ee2e25] px-2 py-1 text-xs font-extrabold text-gray-200">
		{merchant.merchant_name}
	</p>
{:else}
	<p class="rounded-md bg-[#032165] px-2 py-1 text-xs font-extrabold text-gray-200">
		{merchant.merchant_name}
	</p>
{/if}
