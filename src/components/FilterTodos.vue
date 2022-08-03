<template>
  <div>
    Filter Topics:
    <select name="size" id="size" @change="filterTodos($event)">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      options: [200, 100, 50, 20, 10, 5],
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
  },
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: 1px solid #41b883;
}
</style>
