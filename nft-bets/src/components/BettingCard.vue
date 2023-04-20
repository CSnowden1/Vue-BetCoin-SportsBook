<template>
    <div class=" bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="flex items-center mb-2">
          <span class="text-gray-700 font-bold text-xl">{{ team }}</span>
          <span class="ml-2 bg-blue-500 text-white py-1 px-2 rounded-full text-xs">{{ line }}</span>
        </div>
        <div class="text-gray-700 text-base">{{ opponent }} {{ outcome }}</div>
        <div class="mt-4 flex justify-between">
          <div class="text-gray-700 text-sm">{{ homeMoneyLine }}</div>
          <div class="text-gray-700 text-sm">{{ awayMoneyLine }}</div>
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
    },
  };
  </script>