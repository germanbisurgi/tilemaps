<template>
  <div class="container-fluid pt-3">
    <h1>{{ appStore.tilemap.name }}</h1>

    <div class="row">
      <div class="col-xs-12 col-md-3">
        <app-layers/>
      </div>

      <div class="col-xs-12 col-md-6">
        <app-map/>
<!--        <pre>
          {{
            JSON.stringify(appStore.tilemap, (key, value) => {
              if (Array.isArray(value) && Array.isArray(value[0])) {
                const indentedArray = value.map(innerArray => `  ${JSON.stringify(innerArray)},`).join('');
                return `[${indentedArray}]`;
              }
              return value;
            }, 2)
          }}
        </pre>-->
      </div>

      <div class="col-xs-12 col-md-3">
        <app-tiles/>
        <app-tile-info/>
      </div>
    </div>
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
