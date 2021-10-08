<template>
  <div class="h-max p-10 sm:px-8 lg:px-16 xl:px-36 space-y-6 bg-rose-400">
    <div class="">
      <div class="text-4xl">
        📘
      </div>
      <div class="pt-6">
        <input
          v-model="name"
          type="text"
          class="text-white text-4xl font-medium font-sans bg-transparent"
          placeholder="Goal name..."
        >
      </div>
      <div class="pt-2 text-white">
        until 27 May
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Read 10 fictional books'
    }
  }
}
</script>
