<template>
  <div class="" style="margin-top : 50px">
    <div class="container text-center">
      <h1 class="mb-5">{{ msg }}</h1>
      <div class="">
        <form @submit.prevent="signIn">
          <input v-model="email" type="email" placeholder="E-mail">
          <input v-model="password" type="password" placeholder="Password">
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div class="" style="margin-top: 50px">
        <p>No account?
          <router-link to="/sign-up">Sign up</router-link> here.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'sign-in',
    data () {
      return {
        msg: 'Firebase Testing App.',
        email: '',
        password: '',
        text: '',
        labelSize: 12
      }
    },
    methods: {
      signIn () {
        if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            console.log(errorCode + ' ' + errorMessage)
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
