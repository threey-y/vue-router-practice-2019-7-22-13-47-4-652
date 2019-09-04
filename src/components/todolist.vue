<template>
  <div id="todolist">
    <div class="container">
      <div>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
      </div>
      <div>
        <input class="input-text" type="text" name="ListItem" />
        <div id="button">Add</div>
      </div>
      <br />
      <ol>
        <li class>
          <input name="done-todo" type="checkbox" class="done-todo" />
          <span>aaaaaaaa</span>
        </li>
        <li class>
          <input name="done-todo" type="checkbox" class="done-todo" />
          <span>aaaaaaa</span>
        </li>
        <li class>
          <input name="done-todo" type="checkbox" class="done-todo" />
          <span>aaaaa</span>
        </li>
      </ol>
      <div>
        <ul id="filters">
          <li>
            <a href="#" data-filter="all">ALL</a>
          </li>
          <li>
            <a href="#" data-filter="active">Active</a>
          </li>
          <li>
            <a href="#" data-filter="complete">Complete</a>
          </li>
        </ul>
      </div>
    </div>

    <button id="buttonback" @click="jump2todolist">点击返回首页</button>
  </div>
</template>

<script>
export default {
  name: "todolist",
  methods: {
    jump2todolist: function() {
      this.$router.push({ path: "/home" });
    }
  }

};
</script>

<style scoped>


.container {
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  background: white;
  border-radius: 5px;
}

.input-text {
  width: 70%;
}

input {
  padding: 4px 15px 4px 0;
}

#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}

#button:hover {
  cursor: pointer;
  opacity: 0.8;
}

ol {
  padding-left: 20px;
}

ol li {
  padding: 5px;
  color: #000;
}

ol li span {
  word-break: break-all;
  width: 70%;
}

ol li:nth-child(even) {
  background: #f4ecec;
}

li:hover {
  cursor: pointer;
}

#filters {
  text-align: center;
  margin-bottom: -10px;
  margin-top: 40px;
}

#filters li a {
  color: #fc999b;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

#filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
#filters li a.selected,
#filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

#filters li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
}

.checked {
  color: #999;
  text-decoration: line-through;
}

input[type="checkbox"].done-todo {
  margin: 5px 5px 2px 0;
}


#buttonback {
  margin: 20px 20px 20px 20px;
  font-size: 25px;
}
</style>