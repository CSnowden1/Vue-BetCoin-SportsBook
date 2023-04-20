<template>
    <div class="bg-black text-white">
      <div class="flex gap-8 py-2">
        <div class="flex-grow">
          <div class="flex">
            <div class="px-4 text-xl font-bold">NBA</div>
            <div class="overflow-hidden">
              <div class="inline-block pl-4 animate-ticker">
                <span class="pr-4">LAL 108</span>
                <span class="pr-4">MIA 92</span>
                <span class="pr-4">BOS 104</span>
                <span class="pr-4">NYK 112</span>
                <span class="pr-4">ATL 98</span>
                <span class="pr-4">BKN 123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow">
          <div class="flex">
            <div class="px-4 text-xl font-bold">MLB</div>
            <div class="overflow-hidden">
              <div class="inline-block pl-4 animate-ticker">
                <span class="pr-4">NYY 5</span>
                <span class="pr-4">BOS 3</span>
                <span class="pr-4">LAD 7</span>
                <span class="pr-4">SFG 4</span>
                <span class="pr-4">CHW 6</span>
                <span class="pr-4">CLE 2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow">
          <div class="flex">
            <div class="px-4 text-xl font-bold">NFL</div>
            <div class="overflow-hidden">
              <div class="inline-block pl-4 animate-ticker">
                <span class="pr-4">GB 28</span>
                <span class="pr-4">MIN 14</span>
                <span class="pr-4">KC 35</span>
                <span class="pr-4">LV 31</span>
                <span class="pr-4">DAL 24</span>
                <span class="pr-4">TB 21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SportsTicker",
  };
  </script>
  
  <style>
  .animate-ticker {
    animation: ticker 10s linear infinite;
  }
  
  @keyframes ticker {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>