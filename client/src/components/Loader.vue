<template>
    <div class="loader">
        <div class="ctn-loader">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <p>{{ $t('global.loaderPFirst') }} <br/> {{ $t('global.loaderPSecond') }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Loader'
    }
</script>

<style lang="scss" scoped>
    @import '../scss/components/loader.scss'
</style>