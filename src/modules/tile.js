class Tile {
  constructor(config = {}) {
    this.id = config.id ? config.id : 0
    this.color = config.color ? config.color : 'transparent'
  }
}

export default Tile