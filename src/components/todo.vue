<template>
  <div id="todo">
    <p>todo</p>
    <p>{{this.$route.params.time}}</p>
    <button @click="onClick">click</button>
    {{onClick()}}
  </div>
</template>

<script>

export default {
  name: "todo",

  methods: {
    onClick: function() {
      if (this.$route.params.time > 8 && this.$route.params.time < 23) {
        this.$router.push({ path: "/home" });
      } else if (this.$route.params.time > 0 && this.$route.params.time < 8) {
        this.$router.push({ path: "/todolist" });
      }
    }
  }
};
</script>
