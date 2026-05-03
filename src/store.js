import { reactive } from 'vue'

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
      this.currentStep++
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--
    }
  },

  setStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 24) {
      this.currentStep = stepNumber
    }
  },

  saveAnswer(stepId, answer) {
    this.userAnswers[stepId] = answer
  }
})
