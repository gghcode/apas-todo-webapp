<template>
  <div>
    <p>APAS Todo App</p>
    <input placeholder="todo..." />
    <button type="submit">Create</button>
    <button v-on:click="onLogout">Logout</button>
    <ul class="todos">
      <li v-for="todo of todos" :key="todo.id">{{ todo.title }} / {{ todo.contents }}</li>
    </ul>
  </div>
</template>
<script>
import { PURGE_AUTH } from '@/store/mutations.type';
import JwtService from '@/service/jwt.service';
import { FETCH_PROFILE } from '../store/actions.type';

const initialState = {
  todos: [{ id: 4, title: 'fdaf', contents: 'fasdf ' }],
};

export default {
  data() {
    return initialState;
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE);
  },
  methods: {
    onLogout(e) {
      this.$store.commit(PURGE_AUTH);
      this.$router.push({ name: 'login' });
    },
  },
  computed: {},
};
</script>