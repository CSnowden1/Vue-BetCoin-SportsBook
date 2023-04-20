<template>
    <div class="relative bg-gray-200 h-96 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full flex">
        <div class="h-full flex items-center justify-center space-x-10 animate-marquee">
          <img src="https://imgs.search.brave.com/dJil7PDamgo2pjqDNX6w6wSAuARFypARJHPjkau_sA4/rs:fit:917:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/UUxIRDN4dU1oQ3dy/bU5UQTJEc053SGFE/MSZwaWQ9QXBp" alt="Image 1" class="h-72" />
          <img src="https://imgs.search.brave.com/m-MgdeMdAxkaLxM2E2Ha_udax9BxycReqy5EHui4ZXQ/rs:fit:769:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/ZE0tMzF5UHBrLVJS/S2Y3eU5heG5RSGFF/ayZwaWQ9QXBp" alt="Image 2" class="h-72" />
          <img src="https://imgs.search.brave.com/8NdVyX8DS7wKJZSk_awDWVbxKyEjHTeRn9EViRoVFGo/rs:fit:870:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/bVVabmxYdUVoVVN6/U2c5NGRnSEVnSGFF/QyZwaWQ9QXBp" alt="Image 3" class="h-72" />
          <img src="https://imgs.search.brave.com/HvSTJXuFgSmKDA6HcTIL6NzEjt7pGaKt538hteU0Tlc/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/NW1ON2J3OHFRbjl6/SG1Jd3I0OXh3RXND/VyZwaWQ9QXBp" alt="Image 4" class="h-72" />
          <img src="https://imgs.search.brave.com/-H--BrXd9wmYaD9g5xdLMa7KiGp615Aaw278bf6OgOk/rs:fit:1728:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/SldXeU9JZ0I4UjI4/SFBMeHVGZE5RSGFD/QyZwaWQ9QXBp" alt="Image 5" class="h-72" />
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'MovingJumbotron',
    mounted() {
      const marquee = document.querySelector('.animate-marquee');
      const marqueeInner = document.querySelector('.animate-marquee > *');
      const speed = 50;
  
      marqueeInner.innerHTML += marqueeInner.innerHTML;
      marquee.scrollLeft = marquee.scrollWidth / 2;
  
      const animateMarquee = () => {
        marquee.scrollLeft -= 1;
      }
  
      const marqueeTimer = setInterval(animateMarquee, speed);
  
      marquee.onmouseenter = () => clearInterval(marqueeTimer);
      marquee.onmouseleave = () => marqueeTimer = setInterval(animateMarquee, speed);
    }
  }
  </script>
  
  <style scoped>
  .animate-marquee {
    animation: marquee 50s linear infinite;
  }
  
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  </style>