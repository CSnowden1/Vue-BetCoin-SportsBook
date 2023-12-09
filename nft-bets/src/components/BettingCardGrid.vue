<script setup>
import { ref, computed, onMounted } from 'vue';
import BettingCard from "./BettingCard.vue";

const games = ref([]);
const selectedSport = ref(null); // Added for sport selection

const fetchGames = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/matches');
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    games.value = await response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
  }
};

onMounted(fetchGames);

const filteredGames = computed(() => {
  if (selectedSport.value) {
    return games.value.filter(game => game.sport === selectedSport.value);
  }
  return games.value;
});

const selectSport = (sport) => {
  selectedSport.value = sport;
};

console.log()
</script>
<template>
  <div>
    <div class="sport-selection flex justify-around mb-4">
      <button @click="selectSport('NFL')" class="btn-sport">NFL</button>
      <button @click="selectSport('NHL')" class="btn-sport">NHL</button>
      <button @click="selectSport('NBA')" class="btn-sport">NBA</button>
      <!-- Add more buttons for other sports -->
    </div>
    <div class="grid grid-cols-2 auto-rows-auto">
      <div class="bg-white shadow-lg p-4" v-for="game in filteredGames" :key="game.id">
        <BettingCard
          :team="game.home.name"
          :line="game.betting.spread"
          :opponent="game.away.name"
          :homeMoneyLine="game.odds.home"
          :awayMoneyLine="game.odds.away"
          :total="game.betting.overUnder"
          :time="game.date"
        />
      </div>
    </div>
  </div>
</template>


<style>
.btn-sport {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
