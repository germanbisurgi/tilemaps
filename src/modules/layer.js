class Layer {
  constructor(config = {}) {
    this.name = config.name ? config.name : ''
    this.visible = config.visible ? config.name : true
    this.columns = config.columns ? config.columns : 3
    this.rows = config.rows ? config.rows : 3
    this.grid = config.grid ? config.grid : []

    this.init()
  }

  init () {
    for (let i = 0; i < this.rows; i++) {
      this.appendRow(true)
    }
  }

  appendRow(isInit) {
    const newRow = new Array(this.columns).fill(0)
    this.grid.push(newRow)

    if (isInit) {
      return
    }

    this.rows++
  }

  appendColumn() {
    this.grid.forEach((row) => {
      row.push(0)
    })

    this.columns++
  }

  prependRow() {
    const newRow = new Array(this.columns).fill(0)
    this.grid.unshift(newRow)
    this.rows++
  }

  prependColumn() {
    this.grid.forEach((row) => {
      row.unshift(0)
    })

    this.columns++
  }
}

export default Layer