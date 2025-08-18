<template>
  <div class="flex items-center gap-2">
    <UButton
      v-for="(v,i) in gridOptions"
      :key="v.value"
      :color="grid.value == v.value ? 'primary' : 'neutral'"
      @click="setGrid(i)"
      variant="outline"
      size="sm"
    >
      {{ v.label }}
    </UButton>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { gridOptions, setGrid } = mainStore
  const {grid } = storeToRefs(mainStore)
</script>
