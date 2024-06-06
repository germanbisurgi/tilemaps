<template>
  <div class="tile-info">
    <div id="tile-info-container" ref="tileInfoContainer" />
    <button @click="deleteTile()">
      Delete Tile
    </button>
  </div>
</template>

<script>
import {mapState, mapStores} from 'pinia'
import useAppStore from '@/store/app'
import Jedi from '@/modules/jedi'

export default {
  name: 'AppTileInfo',
  data() {
    return {
      editor: null
    }
  },
  computed: {
    ...mapStores(useAppStore),
    ...mapState(useAppStore, [
      'activeTileId'
    ])
  },
  watch: {
    activeTileId() {
      this.initEditor()
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      if (this.editor) {
        this.editor.destroy()
      }

      this.editor = new Jedi.Jedi({
        container: this.$refs.tileInfoContainer,
        data: this.appStore.getActiveTile(),
        iconLib: 'bootstrap-icons',
        schema: {
          "type": "object",
          "title": "Info",
          "properties": {
            "id": {
              "type": "integer",
              "readOnly": true
            },
            "color": {
              "type": "string",
              "format": "color"
            }
          }
        }
      })

      this.editor.on('change', () => {
        this.appStore.updateTile(this.editor.getValue())
      })
    },
    deleteTile() {
      const id = this.appStore.activeTileId
      console.log(id)
      this.appStore.deleteTile(id)
      this.appStore.setActiveTileId(0)
    }
  }
}
</script>
