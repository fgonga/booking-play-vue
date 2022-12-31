<template>
  <div id="login">
    <p class="field">
      <label>Login Name:</label>
      <input type="text" name="username" v-model="auth.username" size="19" value="" />
    </p>
    <p class="field">
      <label>Password:</label>
      <input type="password" name="password" v-model="auth.password" size="19"/>
    </p>
    <p class="buttons">
      <button type="submit" @click="handleLogin" >Account login</button>
    </p>

    <p>
      <a >Register New User</a>
    </p>

  </div>

</template>
<script>
import AuthService from '~/services/AuthService';
export default {
  layout: "default",
  //  middleware: "guest",
  metaInfo() {
    return { title: 'Home' };
  },
  data() {
    return {
      auth:{
        username:null,
        password:null
      }
    };
  },
  methods: {
    handleLogin(){
      return AuthService.login(this.auth).then(async response => {
        await this.$store.dispatch('auth/updateUser', response.data.data)
        this.$router.push({ name: 'hotels.index' })
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}
</script>
