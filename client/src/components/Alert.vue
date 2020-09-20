<template>
    <div class="alert">
        <p>{{ $t('error.login') }}</p>
        <close :size="24" @click="close"/>
    </div>
</template>

<script>
import close from 'vue-material-design-icons/CloseCircle'
export default {
    name: 'Alert',
    components: {
        close
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/alert.scss';
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>