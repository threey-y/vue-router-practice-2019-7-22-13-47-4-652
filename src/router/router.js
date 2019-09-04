import Vue from 'vue'
import VueRouter from 'vue-router'
import todolist from '../components/todolist.vue'
import home from '../components/home.vue'
import app from '../App.vue'
import todo from '../components/todo.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: app },
    { path: '/home', component: home },
    { path: '/todolist', component: todolist },
    { path: '/todo/:time', component: todo }
]
const router = new VueRouter({
    routes
})

export default router;