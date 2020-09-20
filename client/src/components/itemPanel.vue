<template>
    <div :class="{ show : isActive, see : serie.view }">
      <div class="item-main">
        <p class="item-title"><span class="viewed" v-if="serie.view">{{ $t('serie.view') }}</span> {{ serie.title }}</p>
        <div class="item-desc">
          <p class="season-item"><b>Season : </b>{{ serie.season }}</p>
          <p class="episode-item"><b>Episode : </b>{{ serie.episode }}</p>
        </div>
      </div>
      <div class="item-content">
          <p class='item-platform'>{{ serie.platform }}</p>
          <p class="item-category" :class="serie.category">{{ serie.category }}</p>
            <div class="btnOption" @click="itemShow()">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
      <div class="item-options" >
          <div class="field">
              <span @click="isEdit = !isEdit"><i class="fas fa-pencil-alt"></i> {{ $t('serie.edit') }}</span>
              <span @click="removeSerie" ><i class="far fa-trash-alt"></i> {{ $t('serie.delete') }}</span>
          </div>
          <div class="field fieldcheck">
              <label for="view">{{ $t('serie.view') }}</label>
              <input type="checkbox" class="checkbox" name="view" id="view" ref="viewInput" :checked="serie.view == true" @click="viewSerie">
          </div>
      </div>
      <transition name="fade">
        <popupEdit v-if="isEdit" :serie="serie" @editeComplete="editeCompleteStep"/>
      </transition>
      <div class="black" v-if="isEdit" @click="isEdit = !isEdit"></div>
    </div>
</template>

<script>
import SeriesService from '@/services/SeriesService'
import popupEdit from '@/components/popupEdit'

export default {
  data () {
    return {
      isActive: false,
      isError: false,
      texterror: null,
      isEdit: false
    }
  },
  props: ['serie'],
  components: {
    popupEdit
  },
  methods: {
    itemShow () {
      this.isActive = !this.isActive
    },

    async removeSerie () {
      this.$el.style.height = '0'
      this.$el.style.padding = '0'
      this.$el.style.margin = '0'
      this.$el.style.border = 'transparent'
      setTimeout(() => {
        this.$el.style.display = 'none'
      }, 500)
      try {
        setTimeout(() => {
          this.$el.remove()
          SeriesService.deleteSerie(this.serie.id)
        }, 1000)
      } catch (error) {
        this.isError = true
        this.texterror = error.response.data.error
      }
    },

    viewSerie () {
      this.serie.view = !this.serie.view
      SeriesService.updateView(this.serie.id, {view : this.serie.view})
    },

    editeCompleteStep () {
        this.isEdit = false
      }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/itemPanel.scss";
</style>
