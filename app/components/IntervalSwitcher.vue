<template>
  <div class="flex items-center gap-2">
    <span class="opacity-50">Interval:</span>
    <USelect v-model="interval.value" :items="intervalOptions" class="min-w-[75px]"/>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { intervalOptions, setInterval } = mainStore
  const { interval} = storeToRefs(mainStore)
</script>
