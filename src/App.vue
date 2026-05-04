<template>
  <div class="fixed inset-0 bg-[#2a2a2a] flex items-center justify-center font-sans overflow-hidden">
    
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

// 'idle' -> 'full' -> 'shrinking' -> 'done'
const shrinkPhase = ref('idle')
const containerRef = ref(null)

const currentStepData = computed(() => {
  return steps.find(s => s.id === store.currentStep) || steps[0]
})

const enterFullscreen = async () => {
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
