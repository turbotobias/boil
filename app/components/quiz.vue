<script setup lang="ts">
import { QUIZ_QUESTIONS,useStoreQuiz } from '~~/stores/quiz'
const store_quiz = useStoreQuiz()
</script>
<template>
  <div>
    <div v-for="question,i in QUIZ_QUESTIONS" :key="question.id" class="flex flex-col gap-4">
      <template v-if="store_quiz.current_step === i">
        <Transition :name="store_quiz.direction" mode="out-in" appear>
          <div :key="i" class="w-full flex flex-col gap-4">
            <Heading>{{ question?.label }}</Heading>
            <template v-if="question?.options">

              <div v-for="option in question?.options" :key="option.value">
                <UButton v-if="option.type === 'button'" size="xl" block color="neutral" variant="soft"
                  @click="option.on_click">
                  {{ option.label }}
                </UButton>

                <UInput v-if="option.type === 'input_text'" trailing-icon="i-lucide-keyboard" size="xl" color="neutral"
                  variant="subtle" placeholder="Überwältigend!" class="w-full" />
              </div>
            </template>

            <UButton @click="store_quiz.go_to_step(question.button_next.on_click_navigate_to_step)" size="xl" block
              color="secondary" variant="soft" class="py-5">
              {{ question.button_next.label }}
            </UButton>
          </div>
        </Transition>
      </template>
    </div>
  </div>

</template>
<style>
/* Forward/downward transitions */
.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: all 0.3s ease;
}

.slide-from-top-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-from-top-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Backward/upward transitions */
.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active {
  transition: all 0.3s ease;
}

.slide-from-bottom-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-from-left-enter-active,
.slide-from-left-leave-active {
  transition: all 0.3s ease;
}

.slide-from-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-from-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: all 0.3s ease;
}

.slide-from-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-from-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
