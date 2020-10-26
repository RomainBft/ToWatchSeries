<template>
    <div class="edit">
        <div class="popup-edit">
            <label for="title">Title : </label>
            <input type="text" id="title" name="title" v-model="serie.title" required>
            <div class="input-mid">
                <label for="season">Season : </label>
                <input type="number" name="season" id="season" v-model.number="serie.season" min="0" required>
            </div>
            <div class="input-mid">
                <label for="episode">Episode : </label>
                <input type="number" name="episode" id="episode" v-model.number="serie.episode" min="0" required>
            </div>
            <div class="input-mid">
                <label for="platform">Platform : </label>
                <select name="platform" id="platform" v-model="serie.platform" required>
                <option v-for="(platform, index) in platforms" :key="index" :value="platform.name" >{{ platform.name }}</option>
                </select>
            </div>
            <div class="input-mid">
                <label for="category">Category : </label>
                <select name="category" id="category" v-model="serie.category" required>
                <option v-for="(category, index) in categories" :key="index" :value="category.type" >{{ category.type }}</option>
                </select>
            </div>
            <div class="field fieldcheck">
                <label for="view">View</label>
                <input type="checkbox" id="view" class="checkbox" name="view"  v-model="serie.view" :class="{checked : this.serie.view }">
            </div>
            <div class="ctn-btn">
                <button @click="updateSerie">Add Serie</button>
                <button @click="leave">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
import SeriesService from '@/services/SeriesService'
import { mapState } from 'vuex'

export default {
    name: 'popupEdit',
    props: {
        Serie: Object
    },
    computed: {
        ...mapState('series', ['categories', 'platforms']),
    },
    methods: {
        viewSerie () {
            this.serie = !this.serie
        },
        updateSerie() {
            SeriesService.updateSerie(this.serie.id, {
                userId: this.serie.userId,
                title: this.serie.title,
                platform: this.serie.platform,
                category: this.serie.category,
                season: this.serie.season,
                episode: this.serie.episode,
                view: this.serie.view
            }).then(() => {
                this.leave()
            })
        },

        leave() {
            this.$emit('editeComplete')
        }
        
    },
}
</script>

<style lang="scss" scoped>
   @import '@/scss/components/_popupedit.scss';
</style>