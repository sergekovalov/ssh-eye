<template>
  <HomePage v-if="appStore.page === 'home'" />
</template>

<script setup>
  import HomePage from "@fe/pages/home.vue"
  import { useAppStore } from "@fe/stores/app"

  const appStore = useAppStore()
</script>