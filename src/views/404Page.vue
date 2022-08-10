<template>
  <main class="flex min-h-screen items-center">
    <div class="container py-4">
      <h1 class="text-center text-2xl font-bold tracking-tight">404 Page</h1>
      <p class="text-center">The page you requested does not exist.</p>
    </div>
  </main>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  mounted() {
    useMeta({
      title: '404 Page',
      description: '404 Page',
    })
  },
}
</script>
