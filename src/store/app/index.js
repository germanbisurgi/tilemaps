import {defineStore} from 'pinia'
import Layer from "@/modules/layer"

const useAppStore = defineStore('app', {
  state: () => ({
    languages: ['en', 'de'],
    activeTile: 1,
    tiles: [0, 1, 2, 3],
    tileSize: 64,
    activeLayer: 0,
    layers: []
  }),
  getters: {},
  actions: {
    addLayer() {
      this.layers.push(new Layer())
    },
    setTileValue(x, y) {
      const activeLayer = this.layers[this.activeLayer]
      const oldGrid = activeLayer.grid
      const newGrid = JSON.parse(JSON.stringify(oldGrid))
      newGrid[y][x] = this.activeTile
      activeLayer.grid = newGrid
    },
    setActiveTile(value) {
      this.activeTile = value
    }
  }
})

export default useAppStore
