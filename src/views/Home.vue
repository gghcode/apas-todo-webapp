<template>
  <div>
    <p>APAS Todo App</p>
    <input placeholder="todo..." />
    <button type="submit">Create</button>
    <button v-on:click="onLogout">Logout</button>
    <ul class="todos">
      <li v-for="todo of todos" :key="todo.id">
        {{ todo.title }} / {{ todo.contents }}
        <button>Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { PURGE_AUTH } from '@/store/mutations.type';
import JwtService from '@/service/jwt.service';
import { FETCH_PROFILE, FETCH_TODOS } from '../store/actions.type';
import { mapState } from 'vuex';

const initialState = {};

export default {
  data() {
    return initialState;
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  }, // mapState(['todos']),
  mounted() {
    // this.$store.dispatch(FETCH_PROFILE);
    this.$store.dispatch(FETCH_TODOS);
  },
  methods: {
    onLogout(e) {
      this.$store.commit(PURGE_AUTH);
      this.$router.push({ name: 'login' });
    },
  },
};
</script>