<template>
  <div id="app">
    <header-partial/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderPartial from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
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
  },
  created() {
    this.changeLocale(this.locale ? this.locale : navigator.language)
  }
})
</script>

<style lang="scss">
@import "scss/global";
</style>
