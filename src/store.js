import { reactive } from 'vue'
import pageFlipSound from './assets/page-flip.mp3'

const flipAudio = new Audio(pageFlipSound)

const playFlipSound = () => {
  flipAudio.currentTime = 0
  flipAudio.play().catch(e => console.warn('Flip sound play failed:', e))
}

export const store = reactive({
  currentStep: 1,
  userData: {
    name: '',
    age: '',
    gender: '',
    category: ''
  },
  userAnswers: {},

  nextStep() {
    if (this.currentStep < 24) {
      playFlipSound()
      this.currentStep++
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      playFlipSound()
      this.currentStep--
    }
  },

  setStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 24) {
      if (this.currentStep !== stepNumber) {
        playFlipSound()
      }
      this.currentStep = stepNumber
    }
  },

  saveAnswer(stepId, answer) {
    this.userAnswers[stepId] = answer
  }
})
