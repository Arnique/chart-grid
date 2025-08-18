import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const gridOptions = [
    { label: '1x4', value: '1x4', classes: 'grid-cols-4', total: 4 },
    { label: '2x2', value: '2x2', classes: 'grid-rows-2 grid-cols-2', total: 4 },
    { label: '2x3', value: '2x3', classes: 'grid-rows-2 grid-cols-3', total: 6 },
  ]

  const grid = useCookie('grid', {
    default: () => gridOptions[0]
  })

  function setGrid(i: number) {
    grid.value = gridOptions[i]
  }


  const studyOptions = [
    { label: 'VWAP', value: 'vwap', data: 'VWAP@tv-basicstudies' },
    { label: 'SMA 200', value: 'sma200', data: { id: "MASimple@tv-basicstudies", inputs: { length: 200 } } },
    { label: 'SMA 50', value: 'sma50', data: { id: "MASimple@tv-basicstudies", inputs: { length: 50 } } },
  ]

  const study = useCookie('study', {
    default: () => studyOptions[0]
  })

  function setStudy(value: string) {
    const v = studyOptions.find(x => x.value === value)
    if (v) study.value = v
  }

  const intervalOptions = [
    { label: '1m', value: '1' },
    { label: '5m', value: '5' },
    { label: '15m', value: '15' },
    { label: '1H', value: '60' },
    { label: '4H', value: '240' },
    { label: 'D', value: '1D' },
  ]

  const interval = useCookie('interval', { default: () => intervalOptions[0] })

  function setInterval(value: string) {
    const v = intervalOptions.find(x => x.value === value)
    if (v) interval.value = v
  }

  const symbols = useCookie('symbols', {
    default: () => [
      'BYBIT:BTCUSDT.P',
      'BYBIT:ETHUSDT.P',
      'BYBIT:SOLUSDT.P',
      'BYBIT:BNBUSDT.P',
      'BYBIT:XRPUSDT.P',
      'BYBIT:ADAUSDT.P',
    ]
  })

  function setSymbols(list = []) {
    symbols.value = list
  }

  function resetSymbols() {
    symbols.value = [
      'BYBIT:BTCUSDT.P',
      'BYBIT:ETHUSDT.P',
      'BYBIT:SOLUSDT.P',
      'BYBIT:BNBUSDT.P',
      'BYBIT:XRPUSDT.P',
      'BYBIT:ADAUSDT.P',
    ]
  }

  function updateSymbol(index: number, symbol: string) {
    if (symbols.value.includes(symbol)) throw new Error(`Symbol ${symbol} already exists!`)
    symbols.value[index] = symbol
  }

  return {
    gridOptions,
    grid,
    studyOptions,
    study,
    intervalOptions,
    interval,
    symbols,
    setSymbols,
    setGrid,
    setStudy,
    setInterval,
    resetSymbols,
    updateSymbol
  }
})