import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      language: 'Language',
      home: 'Home',
      exportJson: 'Export JSON',
      en: 'English',
      de: 'German',
      map: 'Map',
      picker: 'Picker'
    },
    de: {
      language: 'Sprache',
      home: 'Startseite',
      exportJson: 'JSON Exportieren',
      en: 'Englisch',
      de: 'Deutsch',
      map: 'Karte',
      picker: 'Picker'
    }
  }
})

export default i18n