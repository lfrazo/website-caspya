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
    <div class="clean-footer">
      <div class="container">
        The new footer of the website
      </div>
    </div>
  </div>
</template>

<style scoped>
.clean-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  text-align: center;
  line-height: 50px;
}
</style>