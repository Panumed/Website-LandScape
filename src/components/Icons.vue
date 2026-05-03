<template>
  <svg v-if="name === 'book'" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>

  <svg v-else-if="name === 'clouds'" xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.3 0-.594.03-.878.086C15.897 7.086 13.197 5 10 5 6.134 5 3 8.134 3 12c0 .484.05.955.145 1.408C2.472 13.916 2 14.908 2 16c0 1.657 1.343 3 3 3h12.5z"/>
  </svg>

  <svg v-else-if="name === 'rain-cloud'" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M17.5 15c2.485 0 4.5-2.015 4.5-4.5S19.985 6 17.5 6c-.3 0-.594.03-.878.086C15.897 3.086 13.197 1 10 1 6.134 1 3 4.134 3 8c0 .484.05.955.145 1.408C2.472 9.916 2 10.908 2 12c0 1.657 1.343 3 3 3h12.5z"/>
    <line x1="8" y1="17" x2="7" y2="20" />
    <line x1="12" y1="18" x2="11" y2="21" />
    <line x1="16" y1="17" x2="15" y2="20" />
  </svg>

  <svg v-else-if="name === 'door'" xmlns="http://www.w3.org/2000/svg" width="100" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
    <path d="M14 12v.01"/>
    <path d="M3 21h18"/>
  </svg>

  <svg v-else-if="name === 'sad-face'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M8 9h.01M16 9h.01M7 16a5 5 0 0 1 10 0"/>
  </svg>

  <svg v-else-if="name === 'scribbles'" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M3 12c0-3 3-5 5-5s5 5 2 8-8 2-6-3 4-8 8-4"/>
  </svg>

  <svg v-else-if="name === 'scribble-arrow'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M12 4v16m-6-6 6 6 6-6"/>
  </svg>

  <svg v-else-if="name === 'scribble-corner'" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M3 12c0-3 3-5 5-5s5 5 2 8-8 2-6-3 4-8 8-4"/>
  </svg>

  <svg v-else-if="name === 'hand-reaching'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M10 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M6 10V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10a8 8 0 0 0 16 0v-5a2 2 0 0 0-2-2v0"/>
  </svg>

  <svg v-else-if="name === 'smiley-face'" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>

  <svg v-else-if="name === 'ear'" xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <path d="M13 18c-3.14 0-5.7-2.67-5.7-5.96 0-3.3 2.56-5.96 5.7-5.96 1.83 0 3.47.92 4.49 2.37a4.92 4.92 0 0 1 .46 5.37C16.81 16.03 15 18 13 18Z"/>
    <path d="M11 12.3v.01"/>
  </svg>

  <svg v-else-if="name === 'clock'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-6 opacity-80 text-gray-800">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>

  <svg v-else-if="name === 'hand'" class="animate-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M10 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M6 10V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10a8 8 0 0 0 16 0v-5a2 2 0 0 0-2-2v0"/>
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
