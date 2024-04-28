<template>
  <div class="layers">
    <table>
      <thead>
        <tr>
          <th>{{ $t('layers') }}</th>
          <th>{{ $t('controls') }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(layer, index) in appStore.project.layers" :key="index" class="layer">
          <td>
            <input v-model="layer.name" type="text">
          </td>
          <td>
            <button @click="appStore.activeLayer = index">
              <i v-if="index === appStore.activeLayer" class="bi bi-hand-index-fill" />
              <i v-else class="bi bi-hand-index" />
              <span class="sr-only">Select</span>
            </button>

            <button @click="selectLayer(index)">
              <i v-if="layer.visible" class="bi bi-eye-fill" @click="layer.visible = !layer.visible" />
              <i v-if="!layer.visible" class="bi bi-eye-slash" @click="layer.visible = !layer.visible" />
              <span class="sr-only">Select</span>
            </button>

            <button @click="deleteLayer(index)">
              <i class="bi bi-trash" />
              <span class="sr-only">Delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import useAppStore from '@/store/app'

export default {
  name: 'AppLayers',
  computed: {
    ...mapStores(useAppStore)
  },
}
</script>
