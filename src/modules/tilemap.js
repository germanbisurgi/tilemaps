import Layer from './layer.js'

class Tilemap {
  constructor(config = {}) {
    this.name = config.name ? config.name : 'project'
    this.tileSize = config.tileSize ? config.tileSize : 32
    this.layers = []
    this.tiles = config.tiles ? config.tiles : [
      {
        id: 0,
        color: '#123456'
      },
      {
        id: 1,
        color: '#2ac4cf'
      }
    ]

    if (config.layers) {
      config.layers.forEach((layerData) => {
        const layer = new Layer(layerData)
        this.layers.push(layer)
      })
    } else {
      this.layers = [
        new Layer(),
        new Layer()
      ]
    }
  }
}

export default Tilemap