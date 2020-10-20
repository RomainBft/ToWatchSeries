<template>
  <div>
    <div class="form">
      <div class="form-container">
        <h1>{{ $route.name }}</h1>
        <label for="username">{{ $t('label.username') }} :</label>
        <input type="text" name="username" id="username" v-model="username">
        <label for="email">{{ $t('label.email') }} : </label>
        <input type="text" id="email" name="email" v-model="email">
        <label for="password">{{ $t('label.password') }} : </label>
        <input type="password" id="password" name="password" v-model="password" autocomplete="new-password" @keyup.enter="login">
        <button @click="register">{{ $t('global.register') }}</button>
      </div>
    <p>{{ $t('global.hasAccount') }} <a href="/login">{{ $t('global.login') }}</a></p>
    </div>
     <div class="alert" v-bind:class="{error : isError}">
       <p>{{ $t('error.global') }}</p>
       <close :size="24" @click="this.isError = !this.isError"/>
     </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import close from 'vue-material-design-icons/CloseCircle'
import { mapState } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      ursename: '',
      email: '',
      password: '',
      isError: false
    }
  },
  components: {
    close
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn'])
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({username: this.username, email: this.email, password: this.password })
        this.$router.push({name: 'Home'})
      } catch (error) {
        this.isError = true
      }
    }
  }
}
</script>