<template>
  <div class="language-selector">
    <label class="language-selector-label" for="language-selector">{{ $t('language') }}</label>
    <select id="language-selector" v-model="$i18n.locale" class="language-selector-select">
      <option v-for="lang in languages" :key="lang" :value="lang">
        {{ $t(lang) }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useAppStore from '@/store/app'

export default {
  name: 'AppLanguageSelector',
  computed: {
    ...mapState(useAppStore, [
        'languages'
    ])
  }
}
</script>
