<template>
  <header>
    <div class="main-nav">
      <div class="logo"><a href="/">ToWatchSeries</a></div>
      <div id="hright">
        <div id="btnNav" @click="navOpen" v-bind:class="{active: isOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav  v-bind:class="{active : isOpen}">
          <ul v-if="!isUserLoggedIn">
            <li>
              <a href="/Login" class="item">
                <login class="item-icon" :size="24"/>
                <span>{{ $t('navLogin') }}</span>
              </a>
            </li>
            <li>
              <a href="/Register" class="item">
                <register class="item-icon" :size="24"/>
                <span>{{ $t('navRegister') }}</span>
              </a>
            </li>
          </ul>
          <ul v-if="isUserLoggedIn">
            <li>
              <a href="/" class="item">
                <home class="item-icon" :size="24"/>
                <span>{{ $t('navHome') }}</span>
              </a>
            </li>
            <li>
              <a href="/Profil" class="item">
                <person class="item-icon" :size="24" />
                <span>{{ $t('navProfil') }}</span>
              </a>
            </li>
            <li>
              <a @click="logout" class="item">
                <logout class="item-icon" :size="24"/>
                <span>{{ $t('navLogOut') }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="black" v-bind:class="{active : isOpen}" @click="navOpen"></div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import home from 'vue-material-design-icons/Home';
import person from 'vue-material-design-icons/AccountCog'
import login from 'vue-material-design-icons/Login';
import register from 'vue-material-design-icons/AccountReactivate';
import logout from 'vue-material-design-icons/Logout';


export default {
  components: {
    home,
    person,
    login,
    register,
    logout
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['isUserLoggedIn'])
  },
  methods: {

    navOpen () {
      this.isOpen = !this.isOpen
    },
    logout () {
      this.$store.commit('auth/SET_AUTH', null)
      localStorage.clear()
      this.navOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/header.scss";
</style>
