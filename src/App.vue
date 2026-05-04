<template>
  <div class="fixed inset-0 bg-[#2a2a2a] flex items-center justify-center font-sans overflow-hidden">
    
    <!-- Background Music -->
    <audio ref="bgmAudio" loop :src="bgmFile"></audio>
    
    <!-- Music Toggle Button (fixed to top right) -->
    <button @click="toggleMusic" class="fixed top-4 right-4 z-50 p-3 bg-black/10 hover:bg-black/20 rounded-full backdrop-blur-md transition-all text-gray-500 hover:text-gray-800">
      <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 19h4.586a1 1 0 00.707-.293l5.414-5.414A1 1 0 0016 12.586V11.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 009.586 5H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
    </button>

    <!-- Dynamic Container: Starts full screen, shrinks to mobile -->
    <div 
      ref="containerRef"
      class="phone-container relative bg-white overflow-hidden origin-center flex flex-col"
      :class="[
        shrinkPhase === 'full' ? 'is-full' : '',
        shrinkPhase === 'shrinking' ? 'is-shrinking' : '',
        (shrinkPhase === 'done' || shrinkPhase === 'completed') ? 'is-shrunk' : ''
      ]"
      @click="handleContainerClick"
    >
      
      <!-- Backgrounds with smooth transitions -->
      <Transition name="fade">
        <BackgroundA v-if="currentStepData.background === 'A'" />
      </Transition>
      <Transition name="fade">
        <BackgroundB v-if="currentStepData.background === 'B'" />
      </Transition>

      <!-- Main Content Container -->
      <main class="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center flex-1">
        <Transition name="fade" mode="out-in">
          <StepRenderer :key="store.currentStep" :step="currentStepData" @request-fullscreen="enterFullscreen" />
        </Transition>
      </main>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { store } from './store'
import { steps } from './data/steps'
import BackgroundA from './components/BackgroundA.vue'
import BackgroundB from './components/BackgroundB.vue'
import StepRenderer from './components/StepRenderer.vue'
import bgmFile from './assets/bgm.mp3'

// 'idle' -> 'full' -> 'shrinking' -> 'done'
const shrinkPhase = ref('idle')
const containerRef = ref(null)

const bgmAudio = ref(null)
const isPlaying = ref(false)

const toggleMusic = () => {
  if (!bgmAudio.value) return
  if (isPlaying.value) {
    bgmAudio.value.pause()
    isPlaying.value = false
  } else {
    bgmAudio.value.play().then(() => {
      isPlaying.value = true
    }).catch(e => console.error("Audio playback failed", e))
  }
}

const currentStepData = computed(() => {
  return steps.find(s => s.id === store.currentStep) || steps[0]
})

const enterFullscreen = async () => {
  // Start music on first interaction
  if (bgmAudio.value && bgmAudio.value.paused) {
    bgmAudio.value.play().then(() => {
      isPlaying.value = true
    }).catch(e => console.error("Auto-play failed", e))
  }

  // If the shrink is already done, the button acts as a 'Next' button to actually change the page
  if (shrinkPhase.value === 'done') {
    shrinkPhase.value = 'completed'
    store.nextStep()
    return
  }

  if (shrinkPhase.value !== 'idle') return; // Prevent double clicks during animation
  
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen()
    }
  } catch (err) {
    console.warn("Fullscreen request denied", err)
  }
  
  // Phase 1: Mark as full screen (brief pause so user sees the fullscreen)
  shrinkPhase.value = 'full'

  // Phase 2: After a short delay, start the shrink animation
  setTimeout(() => {
    shrinkPhase.value = 'shrinking'

    // Phase 3: After animation completes, mark as done (do NOT advance step yet)
    setTimeout(() => {
      shrinkPhase.value = 'done'
    }, 2000) // matches CSS transition duration
  }, 600) // short pause in fullscreen before shrinking begins
}

// After shrink is done, clicking once advances to the next step (only once)
const handleContainerClick = () => {
  if (shrinkPhase.value === 'done') {
    shrinkPhase.value = 'completed'
    store.nextStep()
  }
}
</script>

<style scoped>
.phone-container {
  width: 100%;
  height: 100%;
  border-radius: 0;
  box-shadow: none;
  transform: scale(1);
  transition: none;
}

/* Phase: full — just entered fullscreen, no animation yet */
.phone-container.is-full {
  width: 100%;
  height: 100%;
  border-radius: 0;
  box-shadow: none;
  transform: scale(1);
}

/* Phase: shrinking — animate from fullscreen to mobile frame */
.phone-container.is-shrinking {
  width: 100%;
  max-width: 400px;
  height: 92vh;
  border-radius: 2.5rem;
  box-shadow:
    0 0 0 6px rgba(255, 255, 255, 0.1),
    0 25px 80px rgba(0, 0, 0, 0.5),
    0 8px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition:
    max-width 2s cubic-bezier(0.22, 1, 0.36, 1),
    height 2s cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 1.8s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 2s cubic-bezier(0.22, 1, 0.36, 1),
    transform 2s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Phase: done — final resting state */
.phone-container.is-shrunk {
  width: 100%;
  max-width: 400px;
  height: 92vh;
  border-radius: 2.5rem;
  box-shadow:
    0 0 0 6px rgba(255, 255, 255, 0.1),
    0 25px 80px rgba(0, 0, 0, 0.5),
    0 8px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1);
}
</style>
