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
      saveProject: 'Save'
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
      saveProject: 'Speichern'
    }
  }
})

export default i18n