<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-12 col-md-8">
        <app-map />
      </div>
      <div class="col-12 col-md-4">
        <app-layers />
        <app-tile-info />
        <app-tiles />
      </div>
    </div>

    <!--    <pre>
{{ appStore.project }}
    </pre>-->
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
