<template>
  <nav class="bg-white text-black flex justify-between items-center px-4 py-3">
    <div class="flex items-center">
      <button class="p-1 -ml-1 mr-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <span class="font-bold text-lg">Games</span>
    </div>
    <div class="flex items-center space-x-6">
      <a href="#" class="hover:text-gray-500">Picks</a>
      <a href="#" class="hover:text-gray-500">Marketplace</a>
      <button class="relative">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm16-9v4a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4"></path>
        </svg>
        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">5</span>
      </button>
      <button class="flex-shrink-0">
        <span class="sr-only">User menu</span>
        <img class="h-8 w-8 rounded-full" src="https://picsum.photos/200" alt="">
      </button>
    </div>
  </nav>
</template>