<template>
  <div>
    <div class="input-todo">
      <form v-on:submit="onSubmit">
        <input v-model="title" placeholder="todo title" />
        <input v-model="contents" placeholder="todo contents..." />
        <button type="submit">Create</button>
      </form>
    </div>

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
import { FETCH_PROFILE, FETCH_TODOS, LOGOUT } from '../store/actions.type';
import { mapState } from 'vuex';

const initialState = {
  title: '',
  contents: '',
};

export default {
  data() {
    return initialState;
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  }, // mapState(['todos']),
  // mounted() {
  //   // this.$store.dispatch(FETCH_PROFILE);
  //   // this.$store.dispatch(FETCH_TODOS);
  // },
  methods: {
    onSubmit(e) {
      console.log(this.title);
    },
    onLogout(e) {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: 'login' }));
    },
  },
};
</script>