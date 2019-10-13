<template>
  <div class="container page">
    <form v-on:submit.prevent="onSubmit(username, password, password_repeat);">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign up</h1>
        <p class="text-xs-center">
          <router-link :to="{ name: 'login' }">Have an account?</router-link>
        </p>
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="username"
          placeholder="username"
        />
        <p v-if="password_error">Error</p>
        <input
          class="form-control form-control-lg"
          type="password"
          v-model="password"
          placeholder="password"
        />
        <input
          class="form-control form-control-lg"
          v-model="password_repeat"
          type="password"
          placeholder="password confirm"
        />
      </div>

      <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign up</button>
    </form>
  </div>
</template>
<script>
import { REGISTER, LOGIN } from '@/store/actions.type';

export default {
  data() {
    return {
      username: '',
      username_error: '',
      password: '',
      password_repeat: '',
      password_error: '',
    };
  },
  watch: {
    username(val) {
      username_error = '';
    },
  },
  methods: {
    onSubmit(username, password, password_repeat) {
      this.$store
        .dispatch(REGISTER, {
          username,
          password,
          password_repeat,
        })
        .then(() => {
          this.$store
            .dispatch(LOGIN, {
              username,
              password,
            })
            .then(() => this.$router.push({ name: 'home' }));
        });
    },
  },
};
</script>