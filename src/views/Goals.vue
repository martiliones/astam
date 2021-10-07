<template>
  <div class="container mx-auto h-max rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6">
    <h1 class="dark:text-white text-4xl font-bold font-sans">Personal goals</h1>
    
    <div class="flex flex-wrap items-center gap-5 pt-5">
      <div v-for="(task, index) in tasks" :key="index" class="flex max-w-200px space-x-4 items-center w-125 transition-all cursor-pointer p-5 rounded-md py-7" :class="[task.color]">
        <div>
          <div class="text-xl py-2">
            {{ task.icon }}
          </div>
          <div class="text-white font-sans text-lg font-medium">
            {{ task.name }}
          </div>
          <div class="text-gray-100 font-sans text-sm pt-2">
            {{ task.description }}
          </div>
          <Chart class="pt-4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      tasks: [
        {
          color: 'bg-rose-400',
          name: 'Read 10 fictional books',
          description: 'until Sep 25',
          icon: '📘'
        },
        {
          color: 'bg-blue-400',
          name: 'Typing - 125 wpm (rus 10k)',
          description: 'until May 25',
          icon: '⚡️'
        },
        {
          color: 'bg-green-400',
          name: '2100 rating on lichess atomic',
          description: '2 days ago',
          icon: '🔥'
        },
        {
          color: 'bg-orange-400',
          name: 'C1 English Duolingo',
          description: 'until 2022',
          icon: '🚩'
        }
      ]
    }
  }
}
</script>
