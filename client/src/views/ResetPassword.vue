<template>
    <div>
        <div class="form">
            <div class="form-container">
                <h1>{{ $route.name }}</h1>
                <label for="password">{{ $t('label.newPassword') }} : </label>
                <input type="password" id="password" name="password" v-model="password" @keyup.enter="reset">
                <label for="password">{{ $t('label.newPasswordConf') }} : </label>
                <input type="password" id="passwordConf" name="passwordConf" v-model="passwordConf" @keyup.enter="reset">
                <button @click="reset">{{ $t('global.resetPassword') }}</button>
            </div>
        </div>
         <alert v-bind:class="{error : isError}" @close="isError = false"/>
  </div>
</template>

<script>
    import alert from '@/components/Alert'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'ResetPassword',
        data() {
            return {
                isError: false,
                password: undefined,
                passwordConf: undefined
            }
        },
        computed: {
            code() {
                return this.$route.query.code
            }
        },
        components: {
            alert
        },
         methods: {
            reset () {
                AuthenticationService.resetPassword({
                        code: this.code,
                        password: this.password,
                        passwordConfirmation: this.passwordConf,
                    })
                    .then(response => {
                        this.$router.push('/login')
                        console.log(response)
                    })
                    .catch(error => {
                        console.log('An error occurred:', error.response);
                    });
            }
        }
    }
</script>