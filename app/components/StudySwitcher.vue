<template>
  <div class="flex items-center gap-2">
    <UButton
      v-for="(v,i) in studyOptions"
      :key="v.value"
      :color="study.value == v.value ? 'primary' : 'neutral'"
      @click="setStudy(v.value)"
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
  const { studyOptions, setStudy } = mainStore
  const {study } = storeToRefs(mainStore)
</script>
