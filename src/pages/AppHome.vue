<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-12 col-md-8">
        <app-map />
      </div>
      <div class="col-12 col-md-4">
        <app-tiles />
        <app-tile-info />
      </div>
    </div>

    <code>
      {{ appStore }}
    </code>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'
import AppMap from '@/components/AppMap.vue'
import AppTiles from '@/components/AppTiles.vue'
import AppTileInfo from '@/components/AppTileInfo.vue'
import Layer from "@/modules/layer"

export default {
  name: 'AppHome',
  components: {AppTileInfo, AppTiles, AppMap},
  computed: {
    ...mapStores(useAppStore)
  },
  created() {
    const projectData = this.appStore.loadProject()

    if (projectData) {
      this.appStore.initializeProject(projectData)
    } else {
      const layer = new Layer()
      layer.appendRows(2 * 9 )
      layer.appendColumns(2 * 16)
      this.appStore.initializeProject({
        tileSize: 16,
        tiles: [
          {
            id: 0,
            color: '#123456',
            data: {},
          },
          {
            id: 1,
            color: '#2ac4cf',
            data: {},
          }
        ],
        layers: [layer]
      })
    }
  }
}
</script>
