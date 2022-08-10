<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <router-view></router-view>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  mounted() {
    useMeta({
      title: 'Experientialist',
      description: 'Experientialist',
    })
  },
}
</script>
