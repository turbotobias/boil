import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// Static question data
export const QUIZ_QUESTIONS = [
  {
    id: id(),

    label: 'Hey!',
    image: 'https://picsum.photos/640/320?random=1',
    button_next: {
      id: id(),

      label: 'Hey hey hey!',
      on_click_navigate_to_step: 1,
      on_click() {
        useRouter().push({
          name: 'onboard',
          query: {
            agenda: null,
          },
        })
      },
    },
    options: [
      {
        type: 'button',
        id: id(),

        label: 'No hey hey hey!',
        value: 'no-hey',
        on_click() {
          useRouter().push('/')
        },
      },
    ],
  },
  {
    id: id(),

    label: "What's on your agenda?",
    button_next: {
      id: id(),

      label: 'Continue →',
      on_click_navigate_to_step: 2,
    },
    options: [
      {
        type: 'button',

        id: id(),

        label: 'Start a new project',
        value: 'start-a-new-project',
        on_click_navigate_to_step: 2,
        on_click() {
          useRouter().push({
            name: 'onboard',
            query: {
              agenda: 'new',
            },
          })
        },
      },
      {
        type: 'button',
        id: id(),

        label: 'Improve an existing project',
        value: 'improve-an-existing-project',
        on_click_navigate_to_step: 3,
        on_click() {
          // TODO:
        },
      },
      {
        type: 'button',
        id: id(),

        label: 'Hire people',
        value: 'hire-people',
        on_click() {
          // TODO:
        },
        on_click_navigate_to_step: 4,
      },
      {
        type: 'input_text',
        id: id(),

        label: 'Something else?',
        value: 'something-else',
        on_click() {
          // TODO:
        },
        // on_click_navigate_to_step: 2
      },
    ],
  },
  {
    id: id(),

    label: 'When would you prefer to start?',
    button_next: {
      id: id(),

      label: 'Continue →',
      on_click_navigate_to_step: 2,
    },
    options: [
      {
        type: 'button',
        id: id(),

        label: 'Today',
        value: 'today',
        on_click() {
          // TODO: is this correct?
        },
        on_click_navigate_to_step: 2,
      },
      {
        type: 'button',
        id: id(),

        label: 'This week',
        value: 'this-week',
        on_click() {
          // TODO:
        },
        on_click_navigate_to_step: 2,
      },
      {
        type: 'button',
        id: id(),

        label: 'This month',
        value: 'this-month',
        on_click() {
          // TODO is this correct?
        },
        on_click_navigate_to_step: 2,
      },
      {
        type: 'button',
        id: id(),

        label: 'This year',
        value: 'this-year',
        on_click() {
          // TODO is this correct?
        },
        on_click_navigate_to_step: 2,
      },
    ],
  },
] as const

export const useStoreQuiz = defineStore('quiz', () => {
  const current_step = ref(0)
  const direction = ref('slide-from-top')
  const current_question = computed(() => QUIZ_QUESTIONS[current_step.value])

  function go_back(step?: number) {
    direction.value = 'slide-from-right'
    if (step) current_step.value = step
    else current_step.value--
  }

  function go_forward(step?: number) {
    direction.value = 'slide-from-left'
    if (step) current_step.value = step
    else current_step.value++
  }

  function go_to_step(step: number) {
    if (step > current_step.value) {
      direction.value = 'slide-from-left'
      current_step.value = step
    } else if (step < current_step.value) {
      direction.value = 'slide-from-right'
      current_step.value = step
    } else console.warn(`can not go_to_step ${step} when step is same same`)
  }

  return {
    current_step,
    direction,
    current_question,
    go_back,
    go_forward,
    go_to_step,
  }
})
