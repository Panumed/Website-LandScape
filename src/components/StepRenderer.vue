<template>
  <div class="w-full flex flex-col items-center justify-center relative z-10" @click="handleBodyClick">
    <div v-if="step" class="w-full">
      
      <!-- Warning Type -->
      <div v-if="step.type === 'warning'" class="flex flex-col items-center space-y-8">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <p class="text-gray-700 text-xl leading-relaxed whitespace-pre-line text-center">{{ parsedText }}</p>
        <button @click.stop="handleStart" class="text-green-600 hover:text-green-800 active:scale-95 transition-all mt-8 font-medium">
          {{ step.buttonText || 'ไปต่อ ->' }}
        </button>
      </div>

      <!-- Onboarding Type -->
      <div v-else-if="step.type === 'onboarding'" class="flex flex-col w-full px-2 py-4">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full mb-8">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <div class="w-full space-y-6 text-left">
          <div class="space-y-2">
            <label class="block text-gray-700 text-xl pl-2">ชื่อ</label>
            <input v-model="formData.name" type="text" placeholder="คำตอบ" class="w-full px-6 py-2 rounded-full border-[1.5px] border-gray-400 hover:border-gray-600 hover:bg-black/5 active:bg-black/10 active:scale-[0.98] focus:bg-black/5 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-300 transition-all bg-transparent text-lg placeholder-gray-400 text-gray-800" />
          </div>
          <div class="space-y-2">
            <label class="block text-gray-700 text-xl pl-2">อายุ</label>
            <input v-model="formData.age" type="number" placeholder="คำตอบ" class="w-full px-6 py-2 rounded-full border-[1.5px] border-gray-400 hover:border-gray-600 hover:bg-black/5 active:bg-black/10 active:scale-[0.98] focus:bg-black/5 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-300 transition-all bg-transparent text-lg placeholder-gray-400 text-gray-800" />
          </div>
          <div class="space-y-2">
            <label class="block text-gray-700 text-xl pl-2">เพศ</label>
            <div class="relative w-36">
              <select v-model="formData.gender" class="w-full pl-6 pr-10 py-2 rounded-full border-[1.5px] border-gray-400 hover:border-gray-600 hover:bg-black/5 active:bg-black/10 active:scale-[0.98] focus:bg-black/5 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-300 transition-all bg-transparent appearance-none text-lg text-gray-800 cursor-pointer">
                <option value="" disabled selected class="text-gray-400">คำตอบ</option>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="other">อื่นๆ</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
          <button v-if="formData.name" @click.stop="saveOnboarding" class="px-8 py-2 border-[1.5px] border-gray-400 rounded-full text-gray-800 hover:bg-gray-200 hover:border-gray-600 active:bg-gray-300 active:scale-[0.98] focus:bg-gray-200 transition-all text-xl font-medium">
        </div>
      </div>

      <!-- Menu Type -->
      <div v-else-if="step.type === 'menu'" class="flex flex-col items-center space-y-8">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <p class="text-gray-700 text-xl leading-relaxed whitespace-pre-line text-center">{{ parsedText }}</p>
        <div class="flex flex-col space-y-4 w-full">
          <button 
            v-for="opt in step.choices" 
            :key="opt.id"
            @click.stop="selectCategory(opt.text)"
            class="w-full px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-200 hover:border-gray-500 hover:text-gray-900 active:bg-gray-300 active:scale-[0.98] focus:bg-gray-200 focus:border-gray-500 transition-all text-center text-gray-600 text-lg cursor-pointer"
          >
            {{ opt.text }}
          </button>
        </div>
      </div>

      <!-- Choice Type -->
      <div v-else-if="step.type === 'choice'" class="flex flex-col items-center space-y-8">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <p class="text-gray-700 text-xl leading-relaxed whitespace-pre-line text-center">{{ parsedText }}</p>
        <div class="flex flex-col space-y-4 w-full">
          <button 
            v-for="opt in step.choices" 
            :key="opt.id"
            @click.stop="selectChoice(opt.text)"
            class="w-full px-4 py-3 rounded-full border border-gray-300 hover:bg-gray-200 hover:border-gray-500 hover:text-gray-900 active:bg-gray-300 active:scale-[0.98] focus:bg-gray-200 focus:border-gray-500 transition-all text-center text-gray-600 text-lg cursor-pointer"
          >
            {{ opt.text }}
          </button>
        </div>
      </div>

      <!-- Text Input Type -->
      <div v-else-if="step.type === 'text'" class="flex flex-col items-center space-y-8 w-full">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <p class="text-gray-700 text-xl leading-relaxed whitespace-pre-line text-center">{{ parsedText }}</p>
        <input 
          type="text"
          v-model="textAnswer"
          :placeholder="step.placeholder || 'คำตอบ'" 
          class="w-full px-6 py-3 rounded-full border border-gray-300 hover:border-gray-500 hover:bg-black/5 active:bg-black/10 active:scale-[0.98] focus:bg-black/5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-600 transition-all text-center bg-transparent text-lg placeholder-gray-400 text-gray-800"
          @keyup.enter="submitText"
        />
        <!-- Click indicator since there's no explicit button -->
        <div v-if="textAnswer" class="mt-8 opacity-80 cursor-pointer flex justify-center w-full animate-pulse" @click.stop="submitText">
           <img :src="getImageUrl('6-icon-cursor-2.png')" class="w-8 h-8 object-contain" alt="Click" />
        </div>
      </div>

      <!-- Info Type -->
      <div v-else-if="step.type === 'info'" class="flex flex-col items-center space-y-8 cursor-pointer">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <p class="text-gray-700 text-xl leading-relaxed whitespace-pre-line text-center">{{ parsedText }}</p>
      </div>

      <!-- Credits Type -->
      <div v-else-if="step.type === 'credits'" class="flex flex-col items-center space-y-8">
        <div v-if="step.images" class="flex flex-row justify-center items-center gap-4 w-full">
          <img v-for="(img, index) in step.images" :key="img" :src="getImageUrl(img)" :class="['h-32 object-contain', index % 2 === 0 ? 'animate-float' : 'animate-float-delayed']" alt="" />
        </div>
        <div class="text-gray-600 whitespace-pre-line text-xl leading-relaxed text-center">
          {{ parsedText }}
        </div>
        <div class="mt-16 opacity-80 cursor-pointer animate-pulse" @click.stop="restart">
          <img :src="getImageUrl('6-icon-cursor-2.png')" class="w-8 h-8 object-contain" alt="Click" />
        </div>
      </div>
      
      <!-- General Pulsing Hand Cursor (visible when waiting for interaction on Info screens) -->
      <div v-if="step.type === 'info'" class="mt-12 flex justify-center opacity-80 pointer-events-none animate-pulse">
        <img :src="getImageUrl('6-icon-cursor-2.png')" class="w-8 h-8 object-contain" alt="Click" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { store } from '../store'

const props = defineProps({
  step: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['request-fullscreen'])

const formData = ref({
  name: '',
  age: '',
  gender: ''
})

const textAnswer = ref('')

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

const parsedText = computed(() => {
  if (!props.step.text) return ''
  let text = props.step.text.replace('{name}', store.userData.name || 'เพื่อน')
  
  if (text.includes('{dynamic_text}')) {
    const sourceId = props.step.dynamicSourceId
    const answer = store.userAnswers[sourceId] || props.step.defaultText
    text = text.replace('{dynamic_text}', answer)
  }
  return text
})

const handleNext = () => {
  store.nextStep()
}

const handleStart = () => {
  emit('request-fullscreen')
}

const handleBodyClick = () => {
  // Allow clicking anywhere to advance on info screens
  if (props.step.type === 'info') {
    handleNext()
  }
}

const saveOnboarding = () => {
  store.userData.name = formData.value.name
  store.userData.age = formData.value.age
  store.userData.gender = formData.value.gender
  handleNext()
}

const selectCategory = (category) => {
  store.userData.category = category
  handleNext()
}

const selectChoice = (choice) => {
  store.saveAnswer(props.step.id, choice)
  handleNext()
}

const submitText = () => {
  if (textAnswer.value.trim()) {
    store.saveAnswer(props.step.id, textAnswer.value)
    handleNext()
  }
}

const restart = () => {
  store.setStep(1)
  store.userData = { name: '', age: '', gender: '', category: '' }
  store.userAnswers = {}
}

// Reset local state when step changes
watch(() => props.step.id, (newId) => {
  textAnswer.value = ''
  if (newId === 1) {
    formData.value = { name: '', age: '', gender: '' }
  }
})
</script>
