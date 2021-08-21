<template>
  <div class="container mx-auto h-max bg-white dark:bg-gray-800 rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
    <div class="w-full mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div class="flex items-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 stroke-1 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <div class="font-medium font-sans">You have no tasks yet</div>
        <div class="font-sans my-2">Get started by creating a new task group</div>
        <button href="#" class="font-sans flex items-center px-5 py-2 mt-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 justify-between space-x-2">
          <PlusIcon class="h-4 w-4"/>
          <div>
            New group
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/outline';

export default {
  components: { PlusIcon }
}
</script>

