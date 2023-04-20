<script setup>
    import NftAuction from './NftAuction.vue'
</script>


<template>
    <div class="flex flex-col h-full w-1/5 bg-gray-100">
      <h2 class="text-lg font-semibold p-4">NFT Auctions</h2>
      <NftAuction
        description='Spurs receive pick #1 Overall $100 @+800 '
        currentBidPrice='$220'
        amountOfBids="17"
      />
    </div>
</template>
  
  