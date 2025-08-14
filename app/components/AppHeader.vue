<script setup lang="ts">
  const intervals = ref([
    { label: '1m', value: 1 },
    { label: '5m', value: 5 },
    { label: '15m', value: 15 },
    { label: '30m', value: 30 },
    { label: '1H', value: 60 },
    { label: '4H', value: 240 },
    { label: '1D', value: '1D' },
  ])
  const interval = ref(5)
</script>

<template>
  <header class="flex gap-2 h-[var(--header-h)] px-8 items-center">
    <div class="w-[20%]">
      <AppBrand />
    </div>

    <div class="flex-1 h-full">
      <div class="flex h-full justify-center items-center gap-2">
        <GridSwitcher />
        <span class="opacity-10">|</span>
        <StudySwitcher />
        <span class="opacity-10">|</span>
        <span class="opacity-50">Interval:</span>
        <USelect v-model="interval" :items="intervals" class="min-w-[75px]"/>
      </div>
    </div>

    <div class="w-[20%] flex justify-end items-center gap-2">
      <UButton size="sm" color="neutral" variant="outline">Save Layout</UButton>
      <UButton class="lg:hidden" icon="mynaui:menu" />
    </div>
  </header>
</template>