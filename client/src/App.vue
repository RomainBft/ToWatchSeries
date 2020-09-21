<template>
  <div id="app">
    <header-partial/>
    <router-view/>
  </div>
</template>

<script>
import HeaderPartial from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderPartial
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn']),
    ...mapState('lang', ['locale']),
  },
  methods: {
    ...mapActions('lang', ['changeLocale']),

    updateHeightDocument() {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
  },
  created() {
    this.changeLocale(this.locale ? this.locale : navigator.language)
    this.updateHeightDocument()
    window.addEventListener("resize", this.updateHeightDocument)
  }
}
</script>

<style lang="scss">
@import "scss/global";
</style>
