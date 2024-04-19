import {defineStore} from 'pinia'
import Layer from "@/modules/layer"

const useAppStore = defineStore('app', {
  state: () => ({
    mapScale: 1,
    showTileInfo: false,
    languages: ['en', 'de'],
    activeLayer: 0,
    drawing: false,
    activeTileId: 1,
    project: {}
  }),
  getters: {},
  actions: {
    setMapScale(value) {
      this.mapScale = value

      if (this.mapScale < 0.2) {
        this.mapScale = 0.2
      }
    },
    getTileById(id) {
      return this.project.tiles.find((tile) => tile.id === id)
    },
    getActiveTile() {
      return this.project.tiles.find((tile) => tile.id === this.activeTileId)
    },
    setTileValue(x, y) {
      if (!this.drawing) {
        return
      }

      this.project.layers[this.activeLayer].grid[y][x] = this.activeTileId
    },
    setActiveTileId(value) {
      this.activeTileId = value
    },
    updateTile(newTile) {
      let tiles = this.project.tiles

      tiles = tiles.map((tile) => {
        if (tile.id === newTile.id) {
          return newTile
        }

        return tile
      })

      this.project.tiles = tiles
    },
    setDrawing(value) {
      this.drawing = value
    },
    appendRow() {
      this.project.layers[this.activeLayer].appendRows(1)
    },
    appendColumn() {
      this.project.layers[this.activeLayer].appendColumns(1)
    },
    prependRow() {
      this.project.layers[this.activeLayer].prependRows(1)
    },
    prependColumn() {
      this.project.layers[this.activeLayer].prependColumns(1)
    },
    saveProject() {
      localStorage.setItem('project', JSON.stringify(this.project))
    },
    loadProject() {
      const project = JSON.parse(localStorage.getItem('project'))

      if (project) {
        return project
      }

      return false
    },
    initializeProject(data) {
      this.project = {
        tileSize: data.tileSize,
        tiles: data.tiles,
        layers: data.layers.map((layerData) => new Layer(layerData))
      }
    },
    exportJson() {
      const jsonString = JSON.stringify(this.project)
      const blob = new Blob([jsonString], {type: 'text/plain'})
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'project.json'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
})

export default useAppStore
