<template>
  <div class="content bg-white dark:bg-gray-800">
    <div class="bg-indigo-700 py-1 px-5 flex items-center justify-between">
      <!-- <PauseIcon class="w-5 text-white mr-1"/> -->
      <div class="flex items-center">
        <svg class="w-6 text-white mr-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14 19h4V5h-4M6 19h4V5H6v14z" fill="currentColor"></path></svg>

        <div class="text-white font-bold font-sans text-sm">
          Do Workout
        </div>
        <div class="text-white font-sans text-sm pl-2">
          August 18 at 10:31 PM
        </div>
      </div>

      <div class="text-gray-300 font-sans text-sm">
        15:32
      </div>
    </div>
    <header>
      <div class="flex space-x-5">
        <router-link to="/" class="text-base font-medium font-sans text-gray-500 hover:text-gray-900">
          Tasks
        </router-link>
        <router-link to="/goals" class="text-base font-medium font-sans text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
          Goals
        </router-link>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-2 pr-6">
          <FireIcon class="w-6 text-orange-500"/>
          <div class="dark:text-white font-sans">
            53 days
          </div>
        </div>

        <button class="nav-icon-button" aria-label="Toggle dark mode" @click="toggleDarkMode">
          <MoonIcon v-if="!isDarkMode"/>
          <SunIcon v-else/>
        </button>

        <button class="nav-icon-button" aria-label="Toggle dark mode" @click="toggleDarkMode">
          <CogIcon class="w-5"/>
        </button>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { FireIcon,  } from '@heroicons/vue/solid';
import { CogIcon, } from '@heroicons/vue/outline';
import MoonIcon from '@/components/icons/MoonIcon';
import SunIcon from '@/components/icons/SunIcon';

export default {
  components: { FireIcon, CogIcon, SunIcon, MoonIcon },
  data() {
    return {
      isDarkMode: document.documentElement.classList.contains('dark'),
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      this.isDarkMode = !this.isDarkMode;
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
}

.router-link-active {
  color: rgba(67, 56, 202, var(--tw-bg-opacity)) !important;
  font-weight: 500;
}

.dark {
  .router-link-active {
    color: rgb(132, 122, 253) !important
  }
}

.content {
  min-height: 100vh;
}
</style>
