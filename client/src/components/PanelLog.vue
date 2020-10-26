<template>
  <div class="panel-global">
    <h1>{{title}}</h1>
    <div class="panel-listing">
      <itemCreatePanel @loading=loadingUpdate />
      <loader v-if="loading" />
      <div class="panel" v-if="!loading">
        <itemPanel v-for="(serie, index) in series" :key="index" :serie="serie" class="panel-item"/>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService'
import itemCreatePanel from '@/components/itemCreatePanel'
import itemPanel from '@/components/itemPanel'
import loader from '@/components/Loader'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      loading: true,
      series: [],
      error: undefined
    }
  },
  components: {
    itemPanel, itemCreatePanel, loader
  },
  props: {
    title : String
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn', 'account']),
  },
  methods: {
    loadingUpdate() {
      this.loading = true
      this.series = ''
      this.updateSeries();
    },

    async updateSeries() {
      try {
        const series = (await SeriesService.getSeries(this.account.user.id)).data
        this.series = series
        this.loading = false
      } catch (error) {
        this.error = error;
      }
    }
  },
  mounted () {
    this.updateSeries()
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/panel.scss";
</style>
