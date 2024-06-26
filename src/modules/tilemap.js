import Layer from './layer.js'
import Tile from './tile.js'

class Tilemap {
  constructor(config = {}) {
    this.name = config.name ? config.name : 'tilemap'
    this.tileSize = config.tileSize ? config.tileSize : 32
    this.columns = config.columns ? config.columns : 100
    this.rows = config.rows ? config.rows : 100
    this.tiles = config.tiles ? config.tiles : []
    this.layers = config.layers ? config.layers : []
  }

  serialize() {
    return JSON.stringify(this)
  }

  addLayer() {
    const layer = new Layer()

    for (let i = 0; i < this.rows; i++) {
      layer.grid[i] = []

      for (let j = 0; j < this.columns; j++) {
        layer.grid[i][j] = 0
      }
    }

    this.layers.push(layer)
  }

  deleteLayer(id) {
    this.layers = this.layers.filter((layer) => {
      return layer.id !== id
    })
  }

  addTile() {
    const tile = new Tile()
    tile.id = this.tiles.length
    this.tiles.push(tile)
  }
  deleteTile(id) {
    this.tiles = this.tiles.filter((tile => tile.id !== id))

    this.layers.forEach((layer) => {

      layer.grid.forEach((row) => {
        row.forEach((column, index) => {
          if (column === id) {
            row[index] = 0
          }
        })
      })
    })
  }

  appendRows(q) {
    for (let i = 0; i < q; i++) {
      this.layers.forEach((layer) => {
        const newRow = new Array(this.columns).fill(0)
        layer.grid.push(newRow)
      })

      this.rows++
    }
  }

  prependRows(q) {
    for (let i = 0; i < q; i++) {
      this.layers.forEach((layer) => {
        const newRow = new Array(this.columns).fill(0)
        layer.grid.unshift(newRow)
      })

      this.rows++
    }
  }

  appendColumns(q) {
    for (let i = 0; i < q; i++) {
      this.layers.forEach((layer) => {
        layer.grid.forEach((row) => {
          row.push(0)
        })
      })

      this.columns++
    }
  }

  prependColumns(q) {
    for (let i = 0; i < q; i++) {
      this.layers.forEach((layer) => {
        layer.grid.forEach((row) => {
          row.unshift(0)
        })
      })

      this.columns++
    }
  }
}

export default Tilemap