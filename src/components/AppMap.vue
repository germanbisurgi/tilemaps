<template>
  <section class="map">
    <h2>{{ $t('map') }}</h2>

    <div v-for="(layer, index) in appStore.layers" :key="index" class="layer">
      <div v-for="(row, y) in layer.grid" :key="y" class="row">
        <div v-for="(tile, x) in row" :key="x" class="column">
          <div class="tile" :style="{ width: appStore.tileSize + 'px', height: appStore.tileSize + 'px' }" @click="appStore.setTileValue(x, y)">
            <span class="tile-coordinates">{{ x }}-{{ y }}</span>
            <span class="tile-value">{{ tile }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'
export default {
  name: 'AppMap',
  computed: {
    ...mapStores(useAppStore)
  },
}
</script>
