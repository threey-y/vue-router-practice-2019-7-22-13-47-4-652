<template>
  <div id="home">
    <h1>欢迎来到TodoList程序界面！</h1>
    <p>{{number}}</p>

    <button id="buttonbegin" @click="jump2todolist">点击开始</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    jump2todolist: function() {
      this.$router.push({ path: "/todolist" });
    }
  }
};
</script>

<style scoped>
#home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#buttonbegin {
  font-size: 25px;
}
</style>