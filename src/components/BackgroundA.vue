<template>
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <!-- Base Color -->
    <div class="absolute inset-0 bg-[#fffdf0]"></div>
    
    <!-- Top Watercolor Gradients -->
    <div class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#fcd385] to-transparent opacity-90 animate-pulse-slow"></div>
    <div class="absolute top-[-10%] left-[-20%] w-[140%] h-[50%] bg-[radial-gradient(ellipse_at_center,_#ffb84d_0%,_transparent_70%)] opacity-50 blur-[40px] animate-drift"></div>
    
    <!-- Bottom Watercolor Gradients -->
    <div class="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#fcd385] to-transparent opacity-90 animate-pulse-slow" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-[-10%] right-[-20%] w-[140%] h-[50%] bg-[radial-gradient(ellipse_at_center,_#ffb84d_0%,_transparent_70%)] opacity-50 blur-[40px] animate-drift" style="animation-direction: reverse;"></div>

    <!-- SVG Noise Texture for Paper Feel -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.25] mix-blend-multiply" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilterA">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilterA)"/>
    </svg>
  </div>
</template>

<script setup>
</script>
