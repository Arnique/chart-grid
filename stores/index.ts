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

  return {
    gridOptions,
    grid,
    setGrid
  }
})