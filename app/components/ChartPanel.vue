<template>
  <UCard class="h-full flex flex-col" :ui="{ body: 'sm:p-0 p-0 flex-1', header: 'flex items-center gap-2 sm:px-2 p-2 text-xs' }">
    <template #header>
      <UIcon name="octicon:grabber-16" class="cursor-point"/>
      <span class="opacity-50">{{ symbol }}</span>
      <UInput v-model="userSymbol" placeholder="Enter a valid symbol" size="sm" class="ml-auto"/>
      <UButton size="sm" variant="outline" @click="addSymbol" :disabled="!userSymbol" class="disabled:opacity-30 disabled:cursor-not-allowed">Change</UButton>
    </template>
    <Chart v-if="symbol" :options="options" :class="[name , 'h-full']" />
  </UCard>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { setSymbols } = mainStore
  const { symbols } = storeToRefs(mainStore)

  const userSymbol = ref('')
  const props = defineProps({
    symbol: {
      default: 'BYBIT:BTCUSDT.P'
    },
    index: {
      type: Number
    }
  })

  const options = ref({
    theme: 'dark',
    autosize: true,
    symbol: props.symbol,
    timezone: 'Etc/UTC',
    hide_volume: true,
    hide_side_toolbar: true,
    hide_top_toolbar: true,
    allow_symbol_change: true
  })

  const name = computed(() => {
    if (!props.symbol) return ''
    let s = props.symbol.replace(':', '_')
    s = s.replace('.', '_')
    return s
  })

  function addSymbol() {
    const arr = [...symbols.value]
    arr[props.index] = userSymbol.value
    setSymbols(arr)
  }
</script>