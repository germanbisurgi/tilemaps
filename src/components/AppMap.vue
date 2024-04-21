<template>
  <div class="map">
    <div class="map-container">
      <div v-for="(layer, index) in appStore.project.layers" :key="index" class="layer" :class="{'no-scroll': appStore.drawing}" @mousedown="startDrawing()" @touchstart="startDrawing()" @touchmove="fromPoint($event)" @mousemove="fromPoint($event)" @mouseup="stopDrawing()" @touchend="stopDrawing()">
        <div v-for="(row, y) in layer.grid" :key="y" class="layer-row">
          <div v-for="(tile, x) in row" :key="x" class="layer-column">
            <div class="tile" :data-x="x" :data-y="y" :style="{ background: appStore.getTileById(tile).color, width: tileSize + 'px', height: tileSize + 'px' }" @contextmenu="stopContextMenu($event)">
              <span v-if="appStore.showTileInfo" class="tile-coordinates">{{ x }},{{ y }}</span>
              <span v-if="appStore.showTileInfo" class="tile-value">{{ appStore.getTileById(tile).id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <input id="showTileInfo" v-model="appStore.showTileInfo" class="form-check-input" type="checkbox">
      <label for="showTileInfo">{{ $t('showTilesInfo') }}</label>

      <button class="map-btn" @click="appStore.prependColumn()">
        <i class="bi bi-arrow-left-square" />
      </button>

      <button class="map-btn" @click="appStore.prependRow()">
        <i class="bi bi-arrow-up-square" />
      </button>

      <button class="map-btn" @click="appStore.appendRow()">
        <i class="bi bi-arrow-down-square" />
      </button>

      <button class="map-btn" @click="appStore.appendColumn()">
        <i class="bi bi-arrow-right-square" />
      </button>

      <button class="map-btn" @click="mapZoomIn()">
        <i class="bi bi-zoom-in" />
      </button>

      <button class="map-btn" @click="mapZoomOut()">
        <i class="bi bi-zoom-out" />
      </button>
    </div>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'

export default {
  name: 'AppMap',
  data() {
    return {
      lastElementUnderPointer: null
    }
  },
  computed: {
    ...mapStores(useAppStore),
    tileSize() {
      return Math.floor(this.appStore.project.tileSize * this.appStore.mapScale)
    }
  },
  methods: {
    mapZoomIn() {
      this.appStore.setMapScale(this.appStore.mapScale + 0.1)
    },
    mapZoomOut() {
      this.appStore.setMapScale(this.appStore.mapScale - 0.1)
    },
    startDrawing() {
      document.body.classList.add('no-scroll')
      this.appStore.setDrawing(true)
    },
    draw(x, y) {
      if (x && y) {
        this.appStore.setTileValue(x, y)
      }
    },
    stopDrawing() {
      this.appStore.setDrawing(false)
      setTimeout(() => {
        document.body.classList.remove('no-scroll')
      }, 100)
    },
    fromPoint(event) {
      let clientX = event.clientX
      let clientY = event.clientY

      if (event.type === 'mousemove') {
        clientX = event.clientX
        clientY = event.clientY
      } else if (event.type === 'touchmove') {
        clientX = event.touches[0].clientX
        clientY = event.touches[0].clientY
      } else {
        return
      }

      const elementUnderPointer = document.elementFromPoint(clientX, clientY)

      if (elementUnderPointer && elementUnderPointer !== this.lastElementUnderPointer) {
        this.draw(elementUnderPointer.getAttribute('data-x'), elementUnderPointer.getAttribute('data-y'))
      }

      this.lastElementUnderPointer = elementUnderPointer
    },
    stopContextMenu(event) {
      event.preventDefault()
    }
  }
}
</script>
