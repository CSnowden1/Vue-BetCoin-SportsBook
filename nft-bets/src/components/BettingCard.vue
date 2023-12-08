<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md">
    <div class="p-6">
      <div class="border-b pb-4 mb-4">
        <div class="flex justify-around items-center">
          <h3 class="text-lg font-semibold text-gray-900">{{ opponent }}</h3>
          <h3 class="text-lg font-semibold text-gray-900">@</h3>
          <h3 class="text-lg font-semibold text-gray-900">{{ team }}</h3>
        </div>
      </div>

      <div class="flex flex-col justify-around space-y-2">
  <div class="flex justify-between">
    <span class="text-sm font-semibold text-gray-800">{{ opponent }}</span>
    <span class="text-sm font-semibold text-gray-800">Spread</span>
    <span class="text-sm font-semibold text-gray-800">{{ team }}</span>
  </div>
  <div class="flex justify-between">
    <span class="text-sm text-gray-600">-110</span>
    <span class="text-sm text-gray-600">{{ line }}</span>
    <span class="text-sm text-gray-600">-110</span>
  </div>
  <div class="flex justify-between">
    <span class="text-sm text-gray-600">{{ awayMoneyLine }}</span>
    <span class="text-sm font-semibold text-gray-800">Moneyline</span>
    <span class="text-sm text-gray-600">{{ homeMoneyLine }}</span>
  </div>
  <div class="flex justify-between">
    <span class="text-sm text-gray-600">Over {{ totalOver }}</span>
    <span class="text-sm text-gray-600">Total</span>
    <span class="text-sm text-gray-600">Under {{ totalUnder }}</span>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BettingCard',
  props: {
    team: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    line: {
      type: String,
      required: true,
    },
    opponent: {
      type: String,
      required: true,
    },
    outcome: {
      type: String,
      default: '',
    },
    homeMoneyLine: {
      type: String,
      required: true,
    },
    awayMoneyLine: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
  },
  computed: {
    outcomeClass() {
      return {
        'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded': true,
        'bg-green-500 text-white': this.outcome === 'WIN',
        'bg-red-500 text-white': this.outcome === 'LOSE',
        // Add more outcome styles if needed
      };
    },
  },
};
</script>
