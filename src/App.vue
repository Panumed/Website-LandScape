<template>
  <div class="fixed inset-0 bg-[#2a2a2a] flex items-center justify-center font-sans overflow-hidden">
    
    <!-- Dynamic Container: Starts full screen, shrinks to mobile -->
    <div 
      class="relative bg-white overflow-hidden transition-all duration-[1500ms] ease-in-out origin-center flex flex-col"
      :class="!isShrunk 
        ? 'w-full h-full' 
        : 'w-full max-w-[400px] h-full shadow-2xl'"
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

const isShrunk = ref(false)

const currentStepData = computed(() => {
  return steps.find(s => s.id === store.currentStep) || steps[0]
})

const enterFullscreen = async () => {
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen()
    }
  } catch (err) {
    console.warn("Fullscreen request denied", err)
  }
  
  isShrunk.value = true
  
  setTimeout(() => {
    store.nextStep()
  }, 1500)
}
</script>

<style scoped></style>
