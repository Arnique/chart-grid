<template>
  <Chart v-if="symbol" :options="options" :class="[name]" />
</template>

<script setup>
  const props = defineProps({
    symbol: {
      default: 'BYBIT:BTCUSDT.P'
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
  })

  const name = computed(() => {
    if (!props.symbol) return ''
    let s = props.symbol.replace(':', '_')
    s = s.replace('.', '_')
    return s
  })
</script>