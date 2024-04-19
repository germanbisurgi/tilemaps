<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="btn" target="_blank" href="https://github.com/germanbisurgi/tiles">
              <i class="bi bi-github me-1" />
              <span>GitHub</span>
            </a>
          </li>
          <li class="nav-item">
            <button class="btn" @click="appStore.exportJson">
              {{ $t('exportJson') }}
            </button>
          </li>
          <li class="nav-item">
            <button class="btn" @click="appStore.saveProject">
              {{ $t('saveProject') }}
            </button>
          </li>
          <li class="nav-item">
            <app-language-selector />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLanguageSelector from "@/components/AppLanguageSelector.vue"
import useAppStore from '@/store/app'
import {mapStores} from 'pinia'


export default {
  name: 'AppNavbar',
  components: {
    AppLanguageSelector
  },
  computed: {
    ...mapStores(useAppStore)
  }
}
</script>
