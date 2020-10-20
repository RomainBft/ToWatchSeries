<template>
  <div>
      <PanelLog v-if="isUserLoggedIn" :title="$t('homeMessageLogin')" />
      <PanelNoLog v-if="!isUserLoggedIn" :title="$t('homeMessageNoLog')" />
  </div>
</template>

<script>
import PanelLog from '@/components/PanelLog'
import PanelNoLog from '@/components/PanelNoLog'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    PanelLog, PanelNoLog
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/views/home.scss";
</style>
