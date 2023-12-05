<script setup>
import { ref, onMounted } from 'vue';
import BettingCard from "./BettingCard.vue";

const games = ref([]);

onMounted(() => {
  fetchGames();
});

const fetchGames = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/matches');
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    games.value = await response.json();
    console.log(games.value)
    console.log(games.value)
  } catch (error) {
    console.error('Error fetching games:', error);
  }
};
</script>  
<template>
    <div class="grid grid-cols-2 auto-rows-auto">
      <div class="bg-white shadow-lg p-4" v-for="game in games" :key="game.id">
        <BettingCard
          :team="game.home.name"
          :line="game.betting.spread"
          :opponent="game.away.name"
          :homeMoneyLine="game.odds.home"
          :awayMoneyLine="game.odds.away"
        />
      </div>
      <!-- Static Betting Cards here -->
      <div class="bg-white shadow-lg p-4">
        <BettingCard
          team="New England Patriots"
          image="https://i.imgur.com/N8Jp0U6.jpg"
          line="+3"
          opponent="@ Miami Dolphins"
          outcome="WIN"
          homeMoneyLine="+110"
          awayMoneyLine="-130"
        />
      </div>
      <!-- Add more static cards as needed -->
    </div>
  </template>