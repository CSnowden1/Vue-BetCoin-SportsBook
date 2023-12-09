<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md">
    <div class="p-6">
      <div class="flex justify-around items-center">
        <span class=" text-sm font-semibold text-gray-900">{{ convertDateToUserTimezone(time) }}</span>
      </div>
      <div class="border-b pb-4 mb-4">
        <div class="flex justify-around items-center">
          <h3 class="text-lg font-semibold text-gray-900">{{ opponent }}</h3>
          <h3 class="text-lg font-semibold text-gray-900">@</h3>
          <h3 class="text-lg font-semibold text-gray-900">{{ team }}</h3>
        </div>
      </div>

      <div class="flex flex-col justify-around space-y-2">
  <div class="flex justify-between">
    <span class=" text-sm font-semibold text-gray-900">{{ opponent }}</span>
    <span class="text-sm font-semibold text-gray-800">Spread</span>
    <span class="m text-sm font-semibold text-gray-900">{{ team }}</span>
  </div>
  <div class="flex justify-between">
    <span class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">-110</span>
    <span class="text-sm text-gray-600">{{ line }}</span>
    <span class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">-110</span>
  </div>
  <div class="flex justify-between">
    <button class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">{{ awayMoneyLine }}</button>
    <span class="text-sm font-semibold text-gray-800">Moneyline</span>
    <button class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">{{ homeMoneyLine }}</button>
  </div>
  <div class="flex justify-between">
    <span class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">Over</span>
    <span class="text-sm font-semibold text-gray-800">Total</span>
    <span class="moneyline-button text-sm text-gray-600" onclick="selectMoneyline(this)">Under</span>
  </div>
  <div class="flex justify-center">
    <span class="text-sm text-gray-600">{{ total}}</span>
  </div>
</div>

    </div>
  </div>
</template>

<script>



import { convertDateToUserTimezone } from '../helpers/dateConverter'


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
    time: {
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
  methods: {
        convertDateToUserTimezone,
    },
};



</script>


<style>

/* Base Style for Moneyline Buttons */
.moneyline-button {
    background-color: #f0f0f0; /* Light grey background */
    border: 2px solid #0044cc; /* Blue border */
    color: #0044cc; /* Blue text color */
    cursor: pointer;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition: all 0.3s ease; /* Smooth transition for hover and active states */
    border-radius: 8px; /* Slightly rounded corners for modern look */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

/* Hover State */
.moneyline-button:hover {
    background-color: #e6e6e6; /* Slightly darker on hover */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); /* Slightly larger shadow on hover */
}

/* Active/Focus State */
.moneyline-button:active, .moneyline-button:focus {
    background-color: #cce6ff; /* Light blue background for active state */
    border-color: #003399; /* Darker blue border for active state */
    color: #003399; /* Darker text color for better contrast */
    outline: none; /* Remove default focus outline */
}

/* Selected State */
.moneyline-button.selected {
    background-color: #0073e6; /* Bright blue for selected button */
    color: white; /* White text for better visibility */
    border-color: #0052cc; /* Slightly darker border for selected state */
    font-weight: bold; /* Bold font for emphasis */
}



</style>