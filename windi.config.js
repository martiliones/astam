import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  shortcuts: {
    'nav-icon-button': 'py-3 px-3 bg-gray-300 dark:bg-gray-700 dark:text-white rounded-xl',
  },
})
