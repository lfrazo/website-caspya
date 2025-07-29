<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-caspya-midnight-blue',
  },
  bodyAttrs: {
    class: 'h-full',
  }
})
</script>
<template>
  <div class="clean">
    <slot />
  </div>
</template>

<style scoped>

</style>