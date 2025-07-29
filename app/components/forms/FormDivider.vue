<script setup lang="ts">
interface Props {
  backgroundColor?: string;
  textColor?: string;
  lineColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'bg-white',
  textColor: 'text-gray-500',
  lineColor: 'border-gray-300',
})

const { backgroundColor, textColor, lineColor } = toRefs(props);
</script>

<template>
  <div class="relative my-10">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t" :class="[lineColor]" />
    </div>
    <div class="relative flex justify-center">
      <span class="px-2 text-sm" :class="[backgroundColor, textColor]">
        <slot name="text">-</slot>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>