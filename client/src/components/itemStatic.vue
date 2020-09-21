<template>
    <div class="panel-item" :class="{ show : isActive, see : seriestat.see }">
      <div class="item-main">
        <p class="item-title"><span class="viewed" v-if="seriestat.see">{{ $t('serie.view') }}</span> {{ seriestat.title }}</p>
        <div class="item-desc">
          <p class="season-item"><b>{{ $t('serie.season') }} : </b>{{ seriestat.season }}</p>
          <p class="episode-item"><b>{{ $t('serie.episode') }} : </b>{{ seriestat.episode }}</p>
        </div>
      </div>
      <div class="item-content">
          <p class='item-platform'>{{ seriestat.platform }}</p>
          <p class="item-category" :class="seriestat.category">{{ seriestat.category }}</p>
            <div class="btnOption">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
      <div class="item-options" >
          <div class="field">
              <span class="anim-field"><i class="fas fa-pencil-alt"></i>{{ $t('serie.edit') }}</span>
              <span class="anim-field"><i class="far fa-trash-alt"></i>{{ $t('serie.delete') }}</span>
          </div>
          <div class="field fieldcheck anim-field">
              <label for="see">See</label>
              <input type="checkbox" class="checkbox" name="see" id="see" ref="seeInput" :checked="seriestat.see == true">
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      isError: false,
      texterror: null
    }
  },
  props: [
    'seriestat'
  ]
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/itemStatic.scss";
</style>
