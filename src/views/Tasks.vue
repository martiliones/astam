<template>
  <div class="container mx-auto h-max rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6">
    <div class="w-full mt-5 sm:mt-8 sm:flex sm:justify-center" v-if="!tasks.length">
      <div class="flex items-center flex-col">
        <FolderIcon/>
        <div class="font-medium font-sans dark:text-white">You have no tasks yet</div>
        <div class="font-sans my-2 dark:text-white text-sm">Get started by creating a new task group</div>
        <button href="#" class="font-sans flex items-center px-5 py-2 mt-3 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 justify-between space-x-2">
          <PlusIcon class="h-4 w-4"/>
          <div>
            New group
          </div>
        </button>
      </div>
    </div>

    <h1 v-else class="dark:text-white text-4xl font-bold font-sans">All task groups</h1>
    
    <div class="flex flex-wrap items-center gap-10">
      <div v-for="(task, index) in tasks" :key="index" class="flex space-x-4 items-center w-125 transition-all cursor-pointer p-5 rounded-md">
        <div class="w-4 h-4 rounded-xl" :class="[task.color]">

        </div>
        <div>
          <div class="dark:text-white font-sans">
            {{ task.name }}
          </div>
          <div class="text-gray-500 dark:text-gray-400 font-sans">
            {{ task.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/outline';
import FolderIcon from '@/components/icons/FolderIcon';

export default {
  components: { PlusIcon, FolderIcon, },
  data() {
    return {
      tasks: [
        {
          color: 'bg-pink-400',
          name: 'Workout',
          description: 'Get notified when someones posts a comment on a posting.'
        },
        {
          color: 'bg-blue-400',
          name: 'Candidates',
          description: 'Get notified when a candidate applies for a job.'
        },
        {
          color: 'bg-orange-400',
          name: 'Offers',
          description: 'Get notified when a candidate accepts or rejects an offer.'
        }
      ]
    }
  }
}
</script>

