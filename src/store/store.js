import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

const store = new Vuex.Store({
    state: {
        messages: {
            msg1: '',
            msg2: ''
        }
    },
    getters: {
        getMessages: function(state) {
            return function() {
                return state.messages.msg1;
            }
        }
    },
    mutations: {
        updateMessages: function(state, message) {
            state.messages.msg1 = message.msg1;
            // state.messages.msg2 = message.msg2;
        }
    },
    actions: {
        createHello: function(context) {
            axios
                .get("http://127.0.0.1:8080/hello")
                .then(function(response) {
                    context.commit('updateMessages', response.data)
                })
        },
        resetHello: function() {
            this.state.messages.msg1 = ''
        },
    }
})
export default store;