<template>
  <div>
    <div class="input-todo">
      <form v-on:submit.prevent="onSubmit(title, contents);">
        <input v-model="title" placeholder="todo title" />
        <input v-model="contents" placeholder="todo contents..." />
        <button type="submit">Create</button>
      </form>
    </div>
    <ul class="todos">
      <li class="col-md-6" v-for="todo of todos" :key="todo.id">
        {{ todo.title }} / {{ todo.contents }}
        <button v-on:click="onRemoveTodo(todo.id);">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { PURGE_AUTH } from '@/store/mutations.type';
import JwtService from '@/service/jwt.service';
import {
  ADD_TODO,
  FETCH_PROFILE,
  FETCH_TODOS,
  LOGOUT,
  REMOVE_TODO,
} from '../store/actions.type';
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
  },
  mounted() {
    this.$store.dispatch(FETCH_TODOS);
  },
  methods: {
    onSubmit(title, contents) {
      this.$store
        .dispatch(ADD_TODO, { title, contents })
        .then(() => this.$store.dispatch(FETCH_TODOS));
    },
    onRemoveTodo(todoId) {
      this.$store
        .dispatch(REMOVE_TODO, { id: todoId })
        .then(() => this.$store.dispatch(FETCH_TODOS));
    },
  },
};
</script>