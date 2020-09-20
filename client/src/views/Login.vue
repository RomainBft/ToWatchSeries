<template>
  <div>
    <div v-if="!loading" class="form">
      <div class="form-container">
        <h1>{{ $route.name }}</h1>
        <label for="email">{{ $t('label.email') }} : </label>
        <input type="text" id="email" name="email" v-model="email">
        <label for="password">{{ $t('label.password') }} : </label>
        <input type="password" id="password" name="password" v-model="password" @keyup.enter="login">
        <button @click="login()">{{ $t('global.login') }}</button>
      </div>
      <p>{{ $t('global.noAccount') }} <a href="/register">{{ $t('global.createOne') }}</a></p>
    </div>
    <loader v-if="loading" />
    <alert v-bind:class="{error : isError}" @close="isError = false"/>
  </div>
</template>

<script>
import loader from '@/components/Loader'
import alert from '@/components/Alert'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      isError: false,
      loading: false
    }
  },
  components: {
    loader,
    alert
  },
  methods: {
    ...mapActions('auth', { setAuth : 'setAuth' }),

    login () {
      this.loading = true
      this.setAuth({ identifier: this.email, password: this.password })
        .then(() => {
          this.$router.push({name: 'Home'})
        }, err => {
          this.loading = false
          this.isError = true
          throw err
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/views/register.scss";
</style>
