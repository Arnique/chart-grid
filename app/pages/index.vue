<template>
  <section
    style="--gap: 5px"
    class="p-[var(--gap)] gap-[var(--gap)] w-full h-full relative grid transition-all duration-500 ease-in-out"
    data-safelist="grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-rows-1 grid-rows-2 grid-rows-3 grid-rows-4"
    :class="[grid.classes]"
  >
    <ChartPanel
      v-for="(v, i) in symbolsToShow"
      :key="v"
      :symbol="v"
      :index="i"
      draggable="true"
      @dragstart="onDragStart(i)"
      @dragenter="onDragEnter(i)"
      @dragleave="onDragLeave(i)"
      @dragover.prevent
      @drop="onDrop(i)"
      :class="[
        'transition duration-150 rounded-xl',
        dragOverIndex != draggedIndex && dragOverIndex === i ? 'ring-2 ring-blue-500 ring-offset-2 bg-blue-100' : ''
      ]"
    />
  </section>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { setSymbols } = mainStore
  const { grid, symbols } = storeToRefs(mainStore)
  const symbolsToShow = computed(() => symbols.value.slice(0, grid.value.total))

  useHead({
    title: 'Multiple charts in 1 screen!'
  })

  const draggedIndex = ref(null);
  const dragOverIndex = ref(null);

  function onDragStart(index) {
    draggedIndex.value = index;
  }

  function onDragEnter(index) {
    dragOverIndex.value = index;
  }

  function onDragLeave(index) {
    if (dragOverIndex.value === index) {
      dragOverIndex.value = null;
    }
  }

  function onDrop(index) {
    if (draggedIndex.value === null) return;

    const arr = [...symbols.value];
    const [item] = arr.splice(draggedIndex.value, 1);
    arr.splice(index, 0, item);

    draggedIndex.value = null;
    dragOverIndex.value = null;
    setSymbols(arr)
  }
</script>
