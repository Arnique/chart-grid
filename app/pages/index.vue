<template>
<section
  class="p-[10px] gap-[10px] w-full h-full relative grid transition-all duration-500 ease-in-out"
  data-safelist="grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-rows-1 grid-rows-2 grid-rows-3 grid-rows-4"
  :class="[grid.classes]"
>
  <div class="bg-gray-900"></div>
  <div class="bg-gray-900"></div>
  <div class="bg-gray-900"></div>
  <div class="bg-gray-900"></div>

  <template v-if="grid.total == 6">
    <div class="bg-gray-900"></div>
    <div class="bg-gray-900"></div>
  </template>
</section>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { grid } = storeToRefs(mainStore)

  useHead({
    title: 'Multiple charts in 1 screen!'
  })

</script>