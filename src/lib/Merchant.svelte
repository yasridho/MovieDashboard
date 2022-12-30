<script lang="ts">
    export let merchant: {
        merchant_id: string;
        merchant_name: string;
    };
</script>

{#if merchant.merchant_name == 'XXI'}
    <p
        class="text-xs bg-gradient-to-r from-[#c7a24b] to-[#93682b] font-extrabold rounded-md text-gray-200 px-2 py-1"
    >
        {merchant.merchant_name}
    </p>
{:else if merchant.merchant_name == 'CGV'}
    <p class="text-xs bg-[#ee2e25] font-extrabold rounded-md text-gray-200 px-2 py-1">
        {merchant.merchant_name}
    </p>
{:else}
    <p class="text-xs bg-[#032165] font-extrabold rounded-md text-gray-200 px-2 py-1">
        {merchant.merchant_name}
    </p>
{/if}