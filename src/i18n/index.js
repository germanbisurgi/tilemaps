import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      language: 'Language',
      home: 'Home',
      exportJson: 'Export',
      en: 'English',
      de: 'German',
      map: 'Map',
      tiles: 'Tiles',
      brushes: 'Brushes',
      saveProject: 'Save',
      showTilesInfo: 'Show tiles info',
      showGrid: 'Show Grid',
      layers: 'Layers',
      controls: 'Controls',
      addTile: 'Add Tile',
      addLayer: 'Add Layer',
    },
    de: {
      language: 'Sprache',
      home: 'Startseite',
      exportJson: 'Exportieren',
      en: 'Englisch',
      de: 'Deutsch',
      map: 'Karte',
      tiles: 'Fliesen',
      brushes: 'Pinsel',
      saveProject: 'Speichern',
      showTilesInfo: 'Fliesen Info zeigen',
      showGrid: 'Raster anzeigen',
      layers: 'Schichten',
      controls: 'Steuerungen',
      addTile: 'Fliesen hinzufügen',
      addLayer: 'Schicht hinzufügen'
    }
  }
})

export default i18n