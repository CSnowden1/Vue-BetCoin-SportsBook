<template>
  <div>
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" :src="nft.imageUrl" alt="NFT Image">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ nft.ticketOdds }}</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ nft.title }}</a>
        <div class="mt-2">
          <div class="text-gray-600 text-sm">{{ nft.description }}</div>
          <div class="text-gray-600 text-sm">{{ nft.currentBidPrice }}</div>
          <div class="text-gray-600 text-sm">{{ nft.amountOfBids }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nft: {
      type: Object,
      required: true
    }
  }
}
</script>