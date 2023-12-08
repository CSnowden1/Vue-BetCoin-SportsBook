<script setup>
    import Nav from '../Nav.vue'
    import SubNav from '../SubNav.vue'
    import Promotron from '../Promotron.vue'
    import Ticker from '../Ticker.vue'
    import BettingCardGrid from '../BettingCardGrid.vue'
    import AuctionPanel from '../AuctionPanel.vue'
</script>

<template>
    <div class="grid cols-4 rows-5">
        <Nav class="nav" />
        <SubNav class="sub-nav" />
        <Promotron class="promos" />
        <Ticker class="ticker" />
        <BettingCardGrid class="bet-grid" />
        <AuctionPanel class="auction-panel" />
    </div>
</template>


<style scoped>
.nav {
    grid-row: 1;
    grid-column: 1 / span 4;
  }

.sub-nav {
    grid-row: 2;
    grid-column: 1 / span 4;
}

.promos {
    grid-row: 3;
    grid-column: 1 / span 4;
}


.ticker {
    grid-row: 4;
    grid-column: 1 / span 4;
}

.left-panel {
    grid-row: 5;
    grid-column: 1;
    height: 40rem;
    
}
.bet-grid {
    grid-row: 5;
    grid-column: 1 / span 3;
}

.auction-panel {
    grid-row: 5;
    grid-column: 4;
    height: 40rem;

}


</style>






