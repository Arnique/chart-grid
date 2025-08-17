<template>
<section
  style="--gap: 5px"
  class="p-[var(--gap)] gap-[var(--gap)] w-full h-full relative grid transition-all duration-500 ease-in-out"
  data-safelist="grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-rows-1 grid-rows-2 grid-rows-3 grid-rows-4"
  :class="[grid.classes]"
>
  <div class="bg-gray-900" v-for="(v, i) in symbols" :key="v">
    <ChartPanel :symbol="v" />
  </div>

</section>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { grid, symbols } = storeToRefs(mainStore)

  useHead({
    title: 'Multiple charts in 1 screen!'
  })

</script>