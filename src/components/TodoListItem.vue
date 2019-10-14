<template>
  <div>
    <p>{{ item.title }} / {{ item.contents }}</p>
    <button v-on:click="onRemoveTodo();">Remove</button>
  </div>
</template>
<script>
import { REMOVE_TODO, FETCH_TODOS } from '@/store/actions.type';

export default {
  props: ['item'],
  mounted() {
    console.log(this.item);
  },
  methods: {
    onRemoveTodo(todoId) {
      this.$store
        .dispatch(REMOVE_TODO, { id: this.item.id })
        .then(() => this.$store.dispatch(FETCH_TODOS));
    },
  },
};
</script>