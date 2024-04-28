class Layer {
  constructor(config = {}) {
    this.name = config.name ? config.name : 'layer'
    this.visible = config.visible ? config.visible : true
    this.columns = config.columns ? config.columns : 0
    this.rows = config.rows ? config.rows : 0
    this.grid = config.grid ? config.grid : []
  }

  appendRows(q) {
    for (let i = 0; i < q; i++) {
      const newRow = new Array(this.columns).fill(0)
      this.grid.push(newRow)
      this.rows++
    }
  }

  appendColumns(q) {
    for (let i = 0; i < q; i++) {
      this.grid.forEach((row) => {
        row.push(0)
      })

      this.columns++
    }
  }

  prependRows(q) {
    for (let i = 0; i < q; i++) {
      const newRow = new Array(this.columns).fill(0)
      this.grid.unshift(newRow)
      this.rows++
    }
  }

  prependColumns(q) {
    for (let i = 0; i < q; i++) {
      this.grid.forEach((row) => {
        row.unshift(0)
      })

      this.columns++
    }
  }
}

export default Layer