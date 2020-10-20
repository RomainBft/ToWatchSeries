<template>
    <div>
        <div class="form" v-if="!emailSend">
            <div class="form-container">
                <h1>{{ $route.name }}</h1>
                <label for="email">{{ $t('label.email') }} : </label>
                <input type="text" id="email" name="email" v-model="email">
                <button @click="getCode">{{ $t('global.resetPassword') }}</button>
            </div>
            <p>{{ $t('global.hasAccount') }} <a href="/login">{{ $t('global.login') }}</a></p>
        </div>
        <div class="form" v-if="emailSend">
            <p>{{ $t('emailSend') }}</p>
        </div>
         <alert v-bind:class="{error : isError}" @close="isError = false"/>
  </div>
</template>

<script>
    import alert from '@/components/Alert'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'ForgotPassword',
        data() {
            return {
                isError: false,
                email: undefined,
                emailSend: true
            }
        },
        components: {
            alert
        },
         methods: {
            getCode () {
                AuthenticationService.forgotPassword({email: this.email})
                    .then(response => {

                        console.log(response)
                    })
                    .catch(error => {
                        console.log('An error occurred:', error.response);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>