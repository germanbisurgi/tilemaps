<template>
  <div class="container">
    <app-picker />
    <app-map />
    <button @click="exportJson">
      {{ $t('exportJson') }}
    </button>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'
import AppMap from "../components/AppMap.vue";
import AppPicker from "../components/AppPicker.vue";

export default {
  name: 'AppHome',
  components: {AppPicker, AppMap},
  computed: {
    ...mapStores(useAppStore)
  },
  created() {
    this.appStore.addLayer()
  },
  methods: {
    exportJson() {
      const jsonString = JSON.stringify(this.appStore.layers, null, 2)
      const blob = new Blob([jsonString], {type: 'text/plain'})
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'layers.json'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>
