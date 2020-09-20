<template>
    <div>
      <div class="form">
        <div class="form-container">
            <h1>{{ $route.name }}</h1>
        <ul>
            <li>
              <div class="field">
                <label for="email">{{ $t('label.email') }}</label>
                <input type="email" name="email" id="email" v-model="account.user.email">
              </div>
              <div class="field">
                <label for="password">{{ $t('label.newPassword') }}</label>
                <input type="password" name="password" id="password" v-model="password">
              </div>
              <div class="field">
                <label for="password">{{ $t('label.newPasswordConf') }}</label>
                <input type="password" name="password" id="passwordconf" v-model="passwordconf">
              </div>
              <div class="field">
                <label for="username">{{ $t('label.username') }}</label>
                <input type="text" name="username" id="username" v-model="account.user.username">
              </div>
            </li>
            <button type="submit" @click="submit">{{ $t('global.submitModif') }}</button>
        </ul>
        </div>
        <div class="alert" v-bind:class="{error : isError}" v-html="texterror"></div>
    </div>
    <div class="form">
      <div class="field">
          <label for="lang">{{ $t('global.langGlobal') }} : </label>
          <select name="lang" id="lang" v-model="language" required>
            <option v-for="(item, index) in lang" :key="index" :value="item" >{{ $t('global.lang.'+item) }}</option>
          </select>
      </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Profil",
  data() {
    return {
      password: null,
      passwordconf: null,
      isError: false,
      texterror: null,
      lang: {
        en: 'en-EN',
        fr: 'fr-FR'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setUpdateProfil']),
    ...mapActions('lang', ['changeLocale']),

    async submit() {
      if( this.password != this.passwordconf) {
        this.isError = true
        this.texterror = "password and confirmation are not same"
      } else {
        if(this.password != null && this.passwordconf != null) {
          const resp = await this.setUpdateProfil(
            {
              id: this.account.user.id, 
              info : {
                email: this.account.user.email,
                password: this.password,
                username: this.account.user.username
              }
            }
          )
          if(resp != null) {
            this.isError = false
            this.texterror = "profil updated"
          }
        } else {
          const resp = await this.setUpdateProfil( 
            {
              id: this.account.user.id,
              info: {
                email: this.account.user.email,
                username: this.account.user.username
              }
            }
          )
          if(resp != null) {
            this.isError = false
            this.texterror = "profil updated"
          }
        }
      }
    }
  },
  computed: {
    ...mapState('auth', ['account']),
    ...mapState('lang', ['locale']),
    language: {
      get: function() {
        return this.locale
      },
      set: function(newVal) {
        this.changeLocale(newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fieldcheck {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-top: solid 1px var(--fontColor);
}
button {
  display: block;
  margin: 20px auto;
}
li:first-child {
  .field {
    border-top: 0;
  }
}
</style>
