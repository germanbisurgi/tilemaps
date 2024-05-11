class Layer {
  constructor(config = {}) {
    this.id = config.id ? config.id : 'blip'
    this.name = config.name ? config.name : 'layer'
    this.visible = config.visible ? config.visible : true
    this.grid = config.grid ? config.grid : []
  }
}

export default Layer