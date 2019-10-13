<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="title" :to="{ name: 'home'}">APAS TODO</router-link>
      <p v-if="currentUser.username !== undefined">Welcome {{ currentUser.username }}</p>
      <button v-on:click="onLogout" v-if="isAuthenticated">Logout</button>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
import { LOGOUT } from '../store/actions.type';

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapGetters(['currentUser']),
  },
  methods: {
    onLogout(e) {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: 'login' }));
    },
  },
};
</script>
