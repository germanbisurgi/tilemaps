import {defineStore} from 'pinia'
import Tilemap from '@/modules/tilemap'

const useAppStore = defineStore('app', {
  state: () => ({
    mapScale: 0.5,
    showTileInfo: false,
    showGrid: true,
    languages: ['en', 'de'],
    activeLayer: 0,
    drawing: false,
    activeTileId: 1,
    tilemap: {}
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
      return this.tilemap.tiles.find((tile) => tile.id === id)
    },
    getActiveTile() {
      return this.tilemap.tiles.find((tile) => tile.id === this.activeTileId)
    },
    setTileValue(x, y) {
      if (!this.drawing) {
        return
      }

      const cell = typeof this.tilemap.layers[this.activeLayer].grid[y] !== 'undefined' && typeof this.tilemap.layers[this.activeLayer].grid[y][x] !== 'undefined'

      if (cell) {
        this.tilemap.layers[this.activeLayer].grid[y][x] = this.activeTileId
      }
    },
    setActiveTileId(value) {
      this.activeTileId = value
    },
    updateTile(newTile) {
      let tiles = this.tilemap.tiles

      tiles = tiles.map((tile) => {
        if (tile.id === newTile.id) {
          return newTile
        }

        return tile
      })

      this.$patch((state) => {
        state.tilemap.tiles = tiles
      })
    },
    setDrawing(value) {
      this.drawing = value
    },
    saveProject() {
      localStorage.setItem('project', JSON.stringify({
        state: this.tilemap,
        mapScale: this.mapScale
      }))
    },
    loadProject() {
      const data = JSON.parse(localStorage.getItem('project'))

      if (data) {
        return data
      }

      return false
    },
    initializeProject() {
      const project = this.loadProject()
      const tilemap = project.state || {
        tiles: [
          {
            id: 0,
            color: 'transparent'
          },
          {
            id: 1,
            color: '#123456'
          },
          {
            id: 2,
            color: '#2ac4cf'
          }
        ]
      }

      this.tilemap = new Tilemap(tilemap)
      this.mapScale = project.mapScale || 1
    },
    exportJson() {
      const jsonString = this.tilemap.serialize()
      const blob = new Blob([jsonString], {type: 'text/plain'})
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'project.json'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    createImageFromData() {
      const data = this.tilemap
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      canvas.width = data.tileSize * data.columns
      canvas.height = data.tileSize * data.rows

      data.layers.forEach(layer => {
        if (layer.visible) {
          layer.grid.forEach((row, rowIndex) => {
            row.forEach((tileId, colIndex) => {
              const tile = data.tiles.find(tile => tile.id === tileId)
              if (tile) {
                ctx.fillStyle = tile.color
                ctx.fillRect(colIndex * data.tileSize, rowIndex * data.tileSize, data.tileSize, data.tileSize)
              }
            })
          })
        }
      })

      const image = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = image
      downloadLink.download = 'image.png'
      downloadLink.click()
    }
  }
})

export default useAppStore
