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

  return {
    gridOptions,
    grid,
    studyOptions,
    study,
    setGrid,
    setStudy
  }
})