<template>
  <div class="container pt-3">
    <h1>{{ appStore.tilemap.name }}</h1>

    <app-map />

    <div class="row">
      <div class="col-md-6">
        <app-tile-info />
        <app-tiles />
      </div>

      <div class="col-md-6">
        <app-layers />
      </div>
    </div>
    <pre>
{{ JSON.stringify(appStore.tilemap, (key, value) => {
      if (Array.isArray(value) && Array.isArray(value[0])) {
        const indentedArray = value.map(innerArray => `  ${JSON.stringify(innerArray)},`).join('');
        return `[${indentedArray}]`;
      }
      return value;
    }, 2) }}
    </pre>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'
import AppMap from '@/components/AppMap.vue'
import AppTiles from '@/components/AppTiles.vue'
import AppTileInfo from '@/components/AppTileInfo.vue'
import AppLayers from '@/components/AppLayers.vue'

export default {
  name: 'AppHome',
  components: {AppTileInfo, AppTiles, AppMap, AppLayers},
  computed: {
    ...mapStores(useAppStore)
  },
  created() {
    this.appStore.initializeProject()
  }
}
</script>
