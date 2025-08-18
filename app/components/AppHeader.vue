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
        <IntervalSwitcher />
      </div>
    </div>

    <div class="w-[20%] flex justify-end items-center gap-2">
      <UButton size="sm" color="neutral" variant="outline" @click="resetSymbols">Reset Symbols</UButton>
      <UButton class="lg:hidden" icon="mynaui:menu" />
    </div>
  </header>
</template>

<script setup lang="ts">
  const { resetSymbols } = useMainStore()
</script>