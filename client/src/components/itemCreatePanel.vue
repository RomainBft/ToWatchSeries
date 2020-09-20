<template>
    <div class="panel-item" :class="{ add : isAdd }">
        <div class="row">
            <div class="title">{{ $t('serie.addSerie') }}</div>
            <div id="add" @click="toggleAddService()">
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="panel-content">
            <label for="title">{{ $t('serie.title') }} : </label>
            <input type="text" id="title" name="title" v-model="serie.title" required>
            <div class="input-mid">
                <label for="season">{{ $t('serie.season') }} : </label>
                <input type="number" name="season" id="season" v-model.number="serie.season" min="0" required>
            </div>
            <div class="input-mid">
                <label for="episode">{{ $t('serie.episode') }} : </label>
                <input type="number" name="episode" id="episode" v-model.number="serie.episode" min="0" required>
            </div>
            <div class="input-mid">
                <label for="platform">{{ $t('serie.platform') }} : </label>
                <select name="platform" id="platform" v-model="serie.platform" required>
                <option v-for="(platform, index) in platforms" :key="index" :value="platform.name" >{{ platform.name }}</option>
                </select>
            </div>
            <div class="input-mid">
                <label for="category">{{ $t('serie.category') }} : </label>
                <select name="category" id="category" v-model="serie.category" required>
                <option v-for="(category, index) in categories" :key="index" :value="category.type" >{{ category.type }}</option>
                </select>
            </div>
            <div class="field fieldcheck">
                <label for="view">{{ $t('serie.view') }}</label>
                <input type="checkbox" id="view" class="checkbox" name="view"  v-model="serie.view">
            </div>
            <button @click="addSerie">{{ $t('serie.addSerieBtn') }}</button>
        </div>
    </div>
</template>

<script>
import SeriesService from '@/services/SeriesService'
import { Serie } from '@/constructors/serie'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      isError: false,
      isAdd: false,
      texterror: null,
      categorysListing: null,
      platformsListing: null,
      serie: new Serie()
    }
  },
  mounted() {
    if(this.isUserLoggedIn) {
      this.setCategories()
      this.setPlatforms()
    }
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn', 'account']),
    ...mapState('series', ['categories', 'platforms']),

    userId() {
        return this.account.user.id
    }
  },
  methods: {
    ...mapActions('series', ['setCategories', 'setPlatforms']),

    toggleAddService () {
      this.isAdd = !this.isAdd
    },

    addSerie () {
      SeriesService.postSeries({userId: this.userId, ...this.serie})
        .then(resp => {
            if(resp.status == 200) {
              this.$emit('loading')
              Object.assign(this.serie, new Serie())
            }
        })
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/itemCreatePanel.scss";
</style>
