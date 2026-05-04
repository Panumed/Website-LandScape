<template>
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <!-- Base Color -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Top Blue Gradients -->
    <div class="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-[#87a5ff] to-transparent opacity-80 animate-pulse-slow"></div>
    <div class="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_top,_#4870ff_0%,_transparent_70%)] opacity-50 blur-[40px] animate-drift"></div>
    
    <!-- Bottom Blue Gradients -->
    <div class="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#87a5ff] to-transparent opacity-80 animate-pulse-slow" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_bottom,_#4870ff_0%,_transparent_70%)] opacity-50 blur-[40px] animate-drift" style="animation-direction: reverse;"></div>
  </div>
</template>

<script setup>
</script>
