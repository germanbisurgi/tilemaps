<template>
  <div class="map">
    <div class="map-container" :class="{ 'no-scroll': appStore.drawing }">
      <div v-for="(layer, index) in appStore.tilemap.layers" :key="index" class="layer" :class="{ 'hidden': !layer.visible }" @mousedown="onStart($event)" @touchstart="onStart($event)" @touchmove="onMove($event)" @mousemove="onMove($event)" @mouseup="onEnd()" @touchend="onEnd()">
        <div v-for="(row, y) in layer.grid" :key="y" class="layer-row">
          <div v-for="(tile, x) in row" :key="x" class="layer-column">
            <div class="tile" :data-x="x" :data-y="y" :class="{ 'bordered': appStore.showGrid }" :style="{ background: appStore.getTileById(tile).color, width: tileSize + 'px', height: tileSize + 'px' }" @contextmenu="onContextMenu($event)">
              <span v-if="appStore.showTileInfo" class="tile-coordinates">{{ x }},{{ y }}</span>
              <span v-if="appStore.showTileInfo" class="tile-value">{{ appStore.getTileById(tile).id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map-controls d-flex align-items-center">
      <button class="map-control" @click="appStore.createImageFromData()">
        <i class="bi bi-image" />
        <span class="sr-only">As Image</span>
      </button>

      <button class="map-control" @click="appStore.exportJson()">
        <i class="bi bi-filetype-json" />
        <span class="sr-only">As JSON</span>
      </button>

      <button class="map-control" @click="appStore.saveProject()">
        <i class="bi bi-floppy" />
        <span class="sr-only">Save</span>
      </button>

      <button class="map-control" @click="appStore.showTileInfo = !appStore.showTileInfo">
        <i class="bi bi-info-square" />
        <span class="sr-only">{{ $t('showTilesInfo') }}</span>
      </button>

      <button class="map-control" @click="appStore.showGrid = !appStore.showGrid">
        <i class="bi bi-grid-3x3" />
        <span class="sr-only">{{ $t('showGrid') }}</span>
      </button>

      <button class="map-control" @click="appStore.tilemap.prependColumns(1)">
        <i class="bi bi-arrow-left-square" />
        <span class="sr-only">prepend column</span>
      </button>

      <button class="map-control" @click="appStore.tilemap.prependRows(1)">
        <i class="bi bi-arrow-up-square" />
        <span class="sr-only">prepend row</span>
      </button>

      <button class="map-control" @click="appStore.tilemap.appendRows(1)">
        <i class="bi bi-arrow-down-square" />
        <span class="sr-only">append row</span>
      </button>

      <button class="map-control" @click="appStore.tilemap.appendColumns(1)">
        <i class="bi bi-arrow-right-square" />
        <span class="sr-only">append column</span>
      </button>

      <button class="map-control" @click="mapZoomIn()">
        <i class="bi bi-zoom-in" />
        <span class="sr-only">zoom in</span>
      </button>

      <button class="map-control" @click="mapZoomOut()">
        <i class="bi bi-zoom-out" />
        <span class="sr-only">zoom out</span>
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
      return Math.floor(this.appStore.tilemap.tileSize * this.appStore.mapScale)
    }
  },
  methods: {
    mapZoomIn() {
      this.appStore.setMapScale(this.appStore.mapScale + 0.1)
    },
    mapZoomOut() {
      this.appStore.setMapScale(this.appStore.mapScale - 0.1)
    },
    onStart(event) {
      document.body.classList.add('no-scroll')
      this.appStore.setDrawing(true)
      const elementUnderPointer = this.getElementFromPoint(event)

      if (elementUnderPointer) {
        this.draw(elementUnderPointer.getAttribute('data-x'), elementUnderPointer.getAttribute('data-y'))
      }
    },
    onMove(event) {
      const elementUnderPointer = this.getElementFromPoint(event)

      if (elementUnderPointer && elementUnderPointer !== this.lastElementUnderPointer) {
        this.draw(elementUnderPointer.getAttribute('data-x'), elementUnderPointer.getAttribute('data-y'))
      }

      this.lastElementUnderPointer = elementUnderPointer
    },
    onEnd() {
      this.appStore.setDrawing(false)
      setTimeout(() => {
        document.body.classList.remove('no-scroll')
      }, 100)
    },
    getElementFromPoint(event) {
      let clientX = event.clientX
      let clientY = event.clientY

      if (['mousedown', 'mousemove'].includes(event.type)) {
        clientX = event.clientX
        clientY = event.clientY
      } else if (['touchstart', 'touchmove'].includes(event.type)) {
        clientX = event.touches[0].clientX
        clientY = event.touches[0].clientY
      } else {
        return
      }

      return document.elementFromPoint(clientX, clientY)
    },
    draw(x, y) {
      if (x && y) {
        this.appStore.setTileValue(x, y)
      }
    },
    onContextMenu(event) {
      event.preventDefault()
    }
  }
}
</script>
