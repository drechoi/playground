<template>
  <div>
    <h2>Login</h2>
    <button @click="tmp">Gmail login</button>
    <button @click="tmp">Facebook login</button>
  </div>
</template>

<script>
import auth, { SOCIAL_LOGIN_PROVIDERS } from '@/services/AuthService'

export default {
  methods: {
    tmp: () => {
      auth.socialLogin(SOCIAL_LOGIN_PROVIDERS.FACEBOOK)
    }
  }
}
</script>

<style>

</style>
