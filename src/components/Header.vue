<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="title" :to="{ name: 'home'}">APAS TODO</router-link>
      <p v-if="isAuthenticated">Logined</p>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
