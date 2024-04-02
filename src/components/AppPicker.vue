<template>
  <section class="picker">
    <h2>{{ $t('picker') }}</h2>
    <div v-for="(tile, index) in appStore.tiles" :key="index" class="tile" :class="{ 'active': index === appStore.activeTile }" :style="{ width: appStore.tileSize + 'px', height: appStore.tileSize + 'px' }" @click="appStore.setActiveTile(tile)">
      <span>{{ tile }}</span>
    </div>
  </section>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'
export default {
  name: 'AppPicker',
  computed: {
    ...mapStores(useAppStore)
  },
}
</script>
